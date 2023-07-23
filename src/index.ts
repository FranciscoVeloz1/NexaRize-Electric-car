import five from "johnny-five";
import { CarEntity } from "./entities/state.entity";

class ElectricCar {
  state: CarEntity;
  board: five.Board;
  onButton: five.Button;
  forwardButton: five.Button;
  parkingButton: five.Button;
  reverseButton: five.Button;
  turnLed: five.Led;
  forwardLed: five.Led;
  parkingLed: five.Led;
  reverseLed: five.Led;
  pedal: five.Sensor;
  motorIn1: five.Led;
  motorIn2: five.Led;

  constructor() {
    this.board = new five.Board({ port: "/dev/ttyACM0" });
    this.state = {
      carState: {
        isOn: false,
        mode: "parking",
      },
    };
    this.InitializeBoard();

    this.TurnOnCarHandler = this.TurnOnCarHandler.bind(this);
    this.TurnOffCarHandler = this.TurnOffCarHandler.bind(this);
    this.ModeParkingHandler = this.ModeParkingHandler.bind(this);
    this.ModeForwardHandler = this.ModeForwardHandler.bind(this);
    this.ModeReverseHandler = this.ModeReverseHandler.bind(this);
    this.PedalHandler = this.PedalHandler.bind(this);
    this.MotorHandler = this.MotorHandler.bind(this);
  }

  InitializeBoard() {
    this.board.on("ready", () => {
      // Buttons
      this.onButton = new five.Button(4);
      this.forwardButton = new five.Button(6);
      this.parkingButton = new five.Button(5);
      this.reverseButton = new five.Button(7);

      // Leds
      this.turnLed = new five.Led(8);
      this.forwardLed = new five.Led(10);
      this.parkingLed = new five.Led(9);
      this.reverseLed = new five.Led(12);

      // Motors
      this.motorIn1 = new five.Led(3);
      this.motorIn2 = new five.Led(11);

      // Potentiometer
      this.pedal = new five.Sensor("A5");

      // Events
      this.onButton.on("press", this.TurnOnCarHandler);
      this.parkingButton.on("press", this.ModeParkingHandler);
      this.forwardButton.on("press", this.ModeForwardHandler);
      this.reverseButton.on("press", this.ModeReverseHandler);
      this.pedal.on("change", this.PedalHandler);
    });
  }

  // Turn On/Off the car
  TurnOnCarHandler() {
    if (this.pedal.scaleTo(0, 255) > 30) return;
    if (this.state.carState.isOn) return this.TurnOffCarHandler();

    this.turnLed.on();
    this.parkingLed.on();
    this.state.carState.isOn = true;
    console.log("Turning on the car...");
    return;
  }

  TurnOffCarHandler() {
    if (this.state.carState.mode !== "parking") return;
    this.turnLed.off();
    this.forwardLed.off();
    this.parkingLed.off();
    this.reverseLed.off();
    this.state.carState.isOn = false;
    console.log("Turning off the car...");
  }

  // Car modes
  ModeParkingHandler() {
    if (!this.state.carState.isOn) return;
    if (this.pedal.scaleTo(0, 255) > 40) return;
    if (this.state.carState.mode === "parking") return;

    this.parkingLed.on();
    this.forwardLed.off();
    this.reverseLed.off();
    this.state.carState.mode = "parking";
  }

  ModeForwardHandler() {
    if (!this.state.carState.isOn) return;
    if (this.pedal.scaleTo(0, 255) > 40) return;
    if (this.state.carState.mode === "forward") return;

    this.forwardLed.on();
    this.parkingLed.off();
    this.reverseLed.off();
    this.state.carState.mode = "forward";
  }

  ModeReverseHandler() {
    if (!this.state.carState.isOn) return;
    if (this.pedal.scaleTo(0, 255) > 40) return;
    if (this.state.carState.mode === "reverse") return;

    this.reverseLed.on();
    this.parkingLed.off();
    this.forwardLed.off();
    this.state.carState.mode = "reverse";
  }

  // Car speed
  PedalHandler() {
    try {
      if (!this.state.carState.isOn) return;
      const speed = this.pedal.scaleTo(0, 255);
      console.log(`Motor Speed: ${speed}`);
      this.MotorHandler(speed);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  MotorHandler(speed: number) {
    if (speed < 20) {
      this.motorIn1.brightness(0);
      this.motorIn2.brightness(0);
      return;
    }

    const { mode } = this.state.carState;
    if (mode === "parking") {
      this.motorIn1.brightness(0);
      this.motorIn2.brightness(0);
    }

    if (mode === "forward") {
      this.motorIn1.brightness(speed);
      this.motorIn2.brightness(0);
    }

    if (mode === "reverse") {
      this.motorIn1.brightness(0);
      this.motorIn2.brightness(speed);
    }
  }
}

new ElectricCar();
