import five from 'johnny-five'
import { pedalHandler } from './pedal'
import { carIgnition } from './carIgnition'
import { CarEntity } from '../entities/state.entity'
import { parkingMode, forwardMode, reverseMode } from './gearSelector'

export default function InitializeBoard() {
  const board = new five.Board({ port: '/dev/ttyUSB0' })
  const state: CarEntity = {
    carState: {
      isOn: false,
      mode: 'parking'
    }
  }

  board.on('ready', () => {
    // Buttons
    const ignitionButton = new five.Button(4)
    const parkingButton = new five.Button(5)
    const forwardButton = new five.Button(6)
    const reverseButton = new five.Button(7)

    // Leds
    const ignitionLed = new five.Led(8)
    const parkingLed = new five.Led(9)
    const forwardLed = new five.Led(10)
    const reverseLed = new five.Led(11)

    // Motors
    const motorIn1 = new five.Led(2)
    const motorIn2 = new five.Led(3)
    const motorEn = new five.Led(12)

    // Potentiometer
    const pedal = new five.Sensor('A5')

    // Events
    ignitionButton.on('press', () => carIgnition(pedal, ignitionLed, parkingLed, forwardLed, reverseLed, state))
    parkingButton.on('press', () => parkingMode(state, pedal, parkingLed, forwardLed, reverseLed))
    forwardButton.on('press', () => forwardMode(state, pedal, forwardLed, parkingLed, reverseLed))
    reverseButton.on('press', () => reverseMode(state, pedal, reverseLed, parkingLed, forwardLed))
    pedal.on('change', () => pedalHandler(state, pedal, motorIn1, motorIn2, motorEn))
  })
}
