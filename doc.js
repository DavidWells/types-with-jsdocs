const fs = require('fs')
const path = require('path')
const dox = require('doxxx')


const filePath = path.resolve(__dirname, 'src/1_Button_JSDoc_Simple/index.jsx')
const fileCode = fs.readFileSync(filePath, 'utf-8')
const obj = dox.parseComments(fileCode);
const { inspect } = require('util')
console.log('result')
console.log(inspect(obj, {showHidden: false, depth: null}))