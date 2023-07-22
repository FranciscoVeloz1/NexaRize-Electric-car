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

  constructor() {
    this.board = new five.Board({ port: "/dev/ttyACM0" });
    this.state = {
      carState: {
        isOn: false,
        mode: "parking",
      },
    };
    this.InitializeBoard();
  }

  InitializeBoard() {
    this.board.on("ready", () => {
      // Buttons
      this.onButton = new five.Button(4);
      this.forwardButton = new five.Button(5);
      this.parkingButton = new five.Button(6);
      this.reverseButton = new five.Button(7);

      // Leds
      this.turnLed = new five.Led(11);
      this.forwardLed = new five.Led(10);
      this.parkingLed = new five.Led(9);
      this.reverseLed = new five.Led(8);

      // Events
      this.onButton.on("press", () => this.TurnOnCarHandler());

      // If car is on
      this.parkingButton.on("press", () => this.ModeParkingHandler());
      this.forwardButton.on("press", () => this.ModeForwardHandler());
      this.reverseButton.on("press", () => this.ModeReverseHandler());
    });
  }

  TurnOnCarHandler() {
    if (this.state.carState.isOn) return this.TurnOffCarHandler();

    this.turnLed.on();
    this.parkingLed.on();
    this.state.carState.isOn = true;
    console.log("Turning on the car...");
    return;
  }

  TurnOffCarHandler() {
    this.turnLed.off();
    this.forwardLed.off();
    this.parkingLed.off();
    this.reverseLed.off();
    this.state.carState.isOn = false;
    console.log("Turning off the car...");
  }

  ModeParkingHandler() {
    if (!this.state.carState.isOn) return;
    if (this.state.carState.mode === "parking") return;

    this.parkingLed.on();
    this.forwardLed.off();
    this.reverseLed.off();
    this.state.carState.mode = "parking";
  }

  ModeForwardHandler() {
    if (!this.state.carState.isOn) return;
    if (this.state.carState.mode === "forward") return;

    this.forwardLed.on();
    this.parkingLed.off();
    this.reverseLed.off();
    this.state.carState.mode = "forward";
  }

  ModeReverseHandler() {
    if (!this.state.carState.isOn) return;
    if (this.state.carState.mode === "reverse") return;

    this.reverseLed.on();
    this.parkingLed.off();
    this.forwardLed.off();
    this.state.carState.mode = "reverse";
  }
}

new ElectricCar();
