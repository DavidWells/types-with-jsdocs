const fs = require('fs')
const path = require('path')
const parse = require('./index')

let file
file = path.resolve(__dirname, '../../src/0_Button_PropTypes_Class/index.jsx')
file = path.resolve(__dirname, '../../src/0_Button_PropTypes_Function/index.jsx')


// file = path.resolve(__dirname, '../../src/1_Button_JSDoc_Simple/index.jsx')
// file = path.resolve(__dirname, '../../src/2_Button_JSDoc_TypeDef_Function/index.jsx')
// file = path.resolve(__dirname, '../../src/2.1_Button_JSDoc_Function_Extend/index.jsx')
// file = path.resolve(__dirname, '../../src/3_Button_JSDoc_TypeDef_Class/index.jsx')
// file = path.resolve(__dirname, '../../src/4_Button_JSDoc_ImportedTypes/index.jsx')
// file = path.resolve(__dirname, '../../src/5_Button_JSDoc_ImportedTypes_React/index.jsx')
// file = path.resolve(__dirname, '../../src/6_List_TypeScript/index.tsx')

const x = parse(file)
console.log('x', x)