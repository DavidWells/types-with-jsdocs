import { supermanSchema } from './autozod.validate'

/**
 * @type { import("./autozod").Superman } Superman
 */
const superman = {
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
