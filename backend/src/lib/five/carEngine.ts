import { Led } from 'johnny-five'
import { CarEntity, direction } from '../entities/state.entity'

interface params {
  speed: number
  direction: direction
  motorIn1: Led
  motorIn2: Led
  motorEn: Led
}

// Engine direction handler
export const directionHandler = ({ speed, direction, motorIn1, motorIn2, motorEn }: params) => {
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
  if (speed < 20) return directionHandler({ speed: 0, direction: 'stop', motorIn1, motorIn2, motorEn })

  const { mode } = state.carState

  if (mode === 'parking') return directionHandler({ speed: 0, direction: 'stop', motorIn1, motorIn2, motorEn })

  if (mode === 'forward') return directionHandler({ speed, direction: 'forward', motorIn1, motorIn2, motorEn })

  if (mode === 'reverse') return directionHandler({ speed, direction: 'reverse', motorIn1, motorIn2, motorEn })
}
