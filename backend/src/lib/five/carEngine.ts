import { Led } from 'johnny-five'
import { CarEntity, direction } from '../entities/state.entity'

// Engine direction handler
export const directionHandler = (
  speed: number,
  direction: direction,
  motorIn1: Led,
  motorIn2: Led,
  motorEn: Led
) => {
  if (direction === 'forward') {
    console.log(speed)
    motorIn1.on()
    motorIn2.off()
    motorEn.brightness(speed)
  } else if (direction === 'reverse') {
    console.log(speed)
    motorIn1.off()
    motorIn2.on()
    motorEn.brightness(speed)
  } else {
    motorIn1.off()
    motorIn2.off()
    motorEn.brightness(0)
  }
}

// Engine speed handler
export const motorHandler = (speed: number, state: CarEntity, motorIn1: Led, motorIn2: Led, motorEn: Led) => {
  if (speed < 20) {
    directionHandler(0, 'stop', motorIn1, motorIn2, motorEn)
  }

  const { mode } = state.carState
  if (mode === 'parking') {
    directionHandler(0, 'stop', motorIn1, motorIn2, motorEn)
  }

  if (mode === 'forward') {
    directionHandler(speed, 'forward', motorIn1, motorIn2, motorEn)
  }

  if (mode === 'reverse') {
    directionHandler(speed, 'reverse', motorIn1, motorIn2, motorEn)
  }
}
