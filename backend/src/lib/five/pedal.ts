import { Sensor, Led } from 'johnny-five'
import { CarEntity } from '../entities/state.entity'
import { motorHandler } from './carEngine'

// Accelerator pedal
export const pedalHandler = (state: CarEntity, pedal: Sensor, motorIn1: Led, motorIn2: Led, motorEn: Led) => {
  try {
    if (!state.carState.isOn) return
    const speed = pedal.scaleTo(0, 255)
    motorHandler(speed, state, motorIn1, motorIn2, motorEn)
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
