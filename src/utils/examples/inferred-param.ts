// https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIHkBGArAPAFQHxQLxQG8AoKKAbRigEsA7KAa3gHsAzKDAXQC4oAKGgIYBbCDxgBKPDgBuTKgBMiAXwDcRIiwCuNAMbAqTOkIGM4iVJigQAHsAg15AZ1jxk6bFl5NUPDON+EJFAAThDAmsF03ihQAs4CNCDK6jqGjsBQ0XhQxqauqLzEpAI8-MIQkrg4RaRQAPR1UAB6APxBpKk0jkwANhAAdD1MAOZlIuJBSgA0QUilguNSgbX1ja3tUJ3dfYMjYxWTM0riQA
// https://twitter.com/PettengillAaron/status/1608208857867632641
type KeyObj<T> = {
  [K in keyof T]: (name: K) => void
};

function makeKeyObj<T extends KeyObj<T>>(obj: T): T {
  return obj as any
}

const obj = makeKeyObj({
  a: (name) => {
    // ^?
    console.log(name)
  },
  b: (name) => {
    // ^?
    console.log(name)
  },
})