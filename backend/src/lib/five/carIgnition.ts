import { Sensor, Led } from 'johnny-five'
import { CarEntity } from '../entities/state.entity'

interface params {
  state: CarEntity
  pedal: Sensor
  parkingLed: Led
  forwardLed: Led
  reverseLed: Led
  ignitionLed: Led
}

// Car igition
export const carIgnition = ({ pedal, ignitionLed, parkingLed, forwardLed, reverseLed, state }: params) => {
  if (pedal.scaleTo(0, 255) > 30) return

  if (state.carState.isOn) {
    if (state.carState.mode !== 'parking') return

    ignitionLed.off()
    forwardLed.off()
    parkingLed.off()
    reverseLed.off()
    state.carState.isOn = false
    return console.log('Turning off the car...')
  }

  ignitionLed.on()
  parkingLed.on()
  state.carState.isOn = true
  return console.log('Turning on the car...')
}
