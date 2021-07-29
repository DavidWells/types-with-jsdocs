import * as TypeFest from 'type-fest'

export type Pet = {
  name: string,
};

/* Export global types to avoid imports */
declare global {
  type SomethingGlobal = 'value' | 'value2'
  type CamelCasedPropsGlobal<T> = { [K in keyof T as TypeFest.CamelCase<K>]: T[K] };
}