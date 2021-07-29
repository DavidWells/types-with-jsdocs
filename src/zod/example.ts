import { z } from "zod";
import { Villain } from './autozod'
import { villainSchema } from './autozod-out'

const villian: Villain = {
  name: 'steve',
  powers: ['awesome'],
  friends: [],
}

villainSchema.parse(villian)
