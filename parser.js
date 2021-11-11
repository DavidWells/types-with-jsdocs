const path = require('path')
const { inspect } = require('util')
const { parseFiles } = require('@structured-types/api');
const propTypesPlugin = require('@structured-types/prop-types-plugin')
const reactPlugin = require('@structured-types/react-plugin');

// const filePath = './parser-test.js'
// const filePath = path.resolve(__dirname, 'src/0_Button_PropTypes_Function/index.jsx')
// const filePath = path.resolve(__dirname, 'src/1_Button_JSDoc_Simple/index.jsx')
// const filePath = path.resolve(__dirname, 'src/2_Button_JSDoc_TypeDef_Function/index.jsx')
// const filePath = path.resolve(__dirname, 'src/2.1_Button_JSDoc_Function_Extend/index.jsx')
// const filePath = path.resolve(__dirname, 'src/3_Button_JSDoc_TypeDef_Class/index.jsx')
const filePath = path.resolve(__dirname, 'src/4_Button_JSDoc_ImportedTypes/index.jsx')
// const filePath = path.resolve(__dirname, 'src/5_Button_JSDoc_ImportedTypes_React/index.jsx')

const docs = parseFiles([filePath], {
  plugins: [propTypesPlugin, reactPlugin],
});

// https://github.com/ccontrols/structured-types/blob/a65a732f24de298bbde48d27ee9f17c94ba985b5/packages/api/src/types.ts#L34
const PropKind = {
  'String': 1,
  'Number': 2,
  'Boolean': 3,
  'Union': 4,
  'Enum': 5,
  'Tuple': 6,
  'Rest': 7,
  'Undefined': 8,
  'Unknown': 9,
  'Null': 10,
  'Function': 11,
  'Void': 12,
  'Class': 13,
  'Interface': 14,
  'Type': 15,
  'Array': 16,
  'Any': 17,
  'Index': 20,
  'Constructor': 21,
  'Getter': 22,
  'Setter': 23,
  'BigInt': 24,
  'Component': 25,
  'Object': 26,
  'Namespace': 27,
  'RegEx': 28,
}

const kindMap = Object.keys(PropKind).reduce((acc, key) => {
  acc[PropKind[key]] = key
  return acc
}, {})

console.log('kindMap', kindMap)

const getKindNamex = (kind) => {
  return kindMap[kind]
};

const kindEntries = Object.entries(PropKind);
console.log('kindEntries', kindEntries)
const getKindName = (kind) => {
  const strKind = kind ? kind.toString() : 'unknown';
  console.log('strKind', strKind)
  const found = kindEntries.find(([_, v]) => {
    console.log('v', v)
    return v.toString() === strKind;
  });
  return found ? found[0] : undefined;
};

console.log(getKindNamex(1))

console.log(inspect(docs, {showHidden: false, depth: null}))

const xyz = Object.keys(docs).map((key) => {
  return mapper(docs[key])
})

console.log('xyz')
console.log(inspect(xyz, {showHidden: false, depth: null}))

function mapper(obj) {
  if (obj && typeof obj === 'object' && obj.kind) {
    obj.kindType = kindMap[obj.kind]
    if (obj.properties) {
      obj.properties = obj.properties.map((prop) => {
        return mapper(prop)
      })
    }
    if (obj.parameters) {
      obj.parameters = obj.parameters.map((prop) => {
        return mapper(prop)
      })
    }
    if (obj.returns) {
      obj.returns = mapper(obj.returns)
    }
  }
 
  return obj
}