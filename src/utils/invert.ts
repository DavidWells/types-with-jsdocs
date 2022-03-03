// https://twitter.com/buildsghost/status/1498540615658721283/photo/1
/*
export type InvertObject<T extends { [P: string | number | symbol]: any }> = {
  [K in keyof T as T[K]]: K
}

const fooToBar = {
  foo1 : 'bar1',
  foo2: 'bar2',
} as const

const barToFoo: InvertObject<typeof fooToBar> = {
  boo1: 'foo1', // Object literal may only specify known properties..
  bar2: 'foo2', // Type '"boo2"‘ is not assignable to type '"foo2"'.
}
*/