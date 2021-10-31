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