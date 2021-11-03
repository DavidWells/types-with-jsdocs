// @ts-nocheck

class Baz {}
// @ts-ignore
const foo = {}
// without block ignore
// @ts-ignore
foo.bar = new Baz({ someUntypedParameter: true })
// @ts-ignore
foo.bar2 = new Baz({ someUntypedParameter: true })
// @ts-ignore
foo.bar3 = new Baz({ someUntypedParameter: true })
// @ts-ignore
foo.bar4 = new Baz({ someUntypedParameter: true })

// @ts-ignore
foo.bar = new Baz({ someUntypedParameter: true })
// @ts-ignore
foo.bar2 = new Baz({ someUntypedParameter: true })
// @ts-ignore
foo.bar3 = new Baz({ someUntypedParameter: true })
foo.bar4 = new Baz({ someUntypedParameter: true })


/**
 * Example of @ts-ignore-start + @ts-ignore-end
 * @param {MyFunc} xyz
 * @returns {{total: number, adjustedTotal: number, avgWeight: number}} totals
 */
function myFunc(xyz) {
  // implementation details omitted
  return { 
    total: 2, 
    adjustedTotal: 3, 
    avgWeight: 4,
    // @ts-ignore-start
    lol: true,
    haha: true
    // @ts-ignore-end
    // what: 'no' <- broken
  }
}