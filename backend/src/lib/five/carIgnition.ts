import { Sensor, Led } from 'johnny-five'
import { CarEntity } from '../entities/state.entity'

// Car igition
export const carIgnition = (
  pedal: Sensor,
  ingnitionLed: Led,
  parkingLed: Led,
  forwardLed: Led,
  reverseLed: Led,
  state: CarEntity
) => {
  if (pedal.scaleTo(0, 255) > 30) return

  if (state.carState.isOn) {
    if (state.carState.mode !== 'parking') return

    ingnitionLed.off()
    forwardLed.off()
    parkingLed.off()
    reverseLed.off()
    state.carState.isOn = false
    return console.log('Turning off the car...')
  }

  ingnitionLed.on()
  parkingLed.on()
  state.carState.isOn = true
  return console.log('Turning on the car...')
}
