import { Superman } from './autozod'
import { supermanSchema } from './autozod.validate'

const superman: Superman = {
  name: 'superman',
  age: 12,
  underKryptonite: false,
  enemies: {
    bill: {
      name: 'bill',
      powers: ['flys'],
      inPrison: false
    }
  }
}

supermanSchema.parse(superman)
