import * as TypeFest from "type-fest"

export type Pet = {
  name: string,
};

declare global {
  type SomethingGlobal = 'value' | 'value2'
  type CamelCasedPropsGlobal<T> = { [K in keyof T as TypeFest.CamelCase<K>]: T[K] };
}