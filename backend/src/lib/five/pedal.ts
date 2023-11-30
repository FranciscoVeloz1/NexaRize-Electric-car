import { Sensor, Led } from 'johnny-five'
import { motorHandler } from './carEngine'
import { CarEntity } from '../entities/state.entity'

interface params {
  state: CarEntity
  pedal: Sensor
  motorIn1: Led
  motorIn2: Led
  motorEn: Led
}

// Accelerator pedal
export const pedalHandler = ({ state, pedal, motorIn1, motorIn2, motorEn }: params) => {
  try {
    if (!state.carState.isOn) return
    const speed = pedal.scaleTo(0, 255)
    motorHandler(speed, state, motorIn1, motorIn2, motorEn)
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
