// https://github.com/stalniy/casl-examples/blob/19c2dbd1c3dc9fb855ed24108b4481a4eafca5ba/packages/react-blog/src/services/ability.ts
import { Ability, AbilityClass } from '@casl/ability'

export interface User {
  email: string
}

interface Article {
  id: string
  title: string
  body: string
  published: boolean
  createdAt: string
  author: string
  createdBy: User
}

type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'publish';
type Subjects = 'article' | Article | 'all' | 'release';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

function createAbility() {
  const ability = new AppAbility()
  ability.can = ability.can.bind(ability)
  ability.cannot = ability.cannot.bind(ability)

  return ability;
}

const xyz = createAbility()
xyz
xyz.can('create', 'article')

const art: Article = {
  id: 'string',
  title: 'string',
  body: 'string',
  published: false,
  createdAt: 'string',
  author: 'string',
  createdBy: {
    email: 'foo'
  },
}