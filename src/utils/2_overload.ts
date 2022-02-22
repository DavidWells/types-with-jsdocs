// ----Function overload───────
// https://twitter.com/steveruizok/status/1495328409613918210?s=11

export const greet: {
  (name: string): string
  (hellos: number): string
  (arg: string | number): string
} = (arg) => {
  if (typeof arg === 'string') {
    return `Hello ${arg}!`
  }
  return Array.from(Array(arg))
  .map(() => `Hello`)
  .join(' ')
}

// greet('c')
// greet(1)