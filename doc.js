const fs = require('fs')
const path = require('path')
const dox = require('doxxx')


// const filePath = path.resolve(__dirname, 'src/1_Button_JSDoc_Simple/index.jsx')
// const filePath = path.resolve(__dirname, 'src/2_Button_JSDoc_TypeDef_Function/index.jsx')
// const filePath = path.resolve(__dirname, 'src/2.1_Button_JSDoc_Function_Extend/index.jsx')
// const filePath = path.resolve(__dirname, 'src/3_Button_JSDoc_TypeDef_Class/index.jsx')
// const filePath = path.resolve(__dirname, 'src/4_Button_JSDoc_ImportedTypes/index.jsx')
const filePath = path.resolve(__dirname, 'src/5_Button_JSDoc_ImportedTypes_React/index.jsx')

const fileCode = fs.readFileSync(filePath, 'utf-8')
const obj = dox.parseComments(fileCode)
const { inspect } = require('util')
console.log('result')
console.log(inspect(obj, {showHidden: false, depth: null}))