const path = require('path')
const {gather} = require("getdocs-ts")

let items = gather({
  filename: path.resolve(__dirname, "../src/utils/examples/rbac/index.ts")
})

const { inspect } = require('util')
console.log('Extracted types:')
console.log(inspect(items, {showHidden: false, depth: null}))