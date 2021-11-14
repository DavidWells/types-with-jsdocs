/**
 * JSDoc style
 * @typedef {object} RgbColors
 * @property {number} red
 * @property {number} green
 * @property {number} blue
 */

/**
 * JSDoc style with primative
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * JSDoc style
 * @type {Array.<RgbColors>}
 */
const colors1 = [{ red: 0, green: 0, blue: 0 }];

/**
 * TypeScript style
 * @type {Array<RgbColors>}
 */
const color3 = [{ red: 255, green: 255, blue: 255 }];

/**
 * JSDoc type bracket
 * @type {String[]}
 */
const arrayOfStrings = ['a', 'b'];

/**
 * @type {Number[]}
 */
const arrayOfNumbers = [1, 2, 3];

/**
 * @type {Boolean[]}
 */
const arrayOfBools = [true, false, true];

/**
 * TypeScript style
 * @type {RgbColors[]}
 */
const color2 = [{ red: 111, green: 111, blue: 111 }];

/**
 * TypeScript style array of objects
 * @type Array<{localPath:string, fullPath: string}>
 */
let filePaths = [{ localPath: 'xyz', fullPath: 'abc' }];


// ────── Function returning an array of objects ─────────────────

/**
 * @typedef {Object} Article
 * @property {number} price
 * @property {number} vat
 * @property {string} string
 * @property {boolean=} sold
 */

/**
 * Now we can use Article as a proper type
 * @param {[Article]} articles
 */
function totalAmount(articles) {
  return articles.reduce((total, article) => {
    return total + addVAT(article)
  }, 0)
}
/**
 * @param {Article} article
 */
function addVAT(article) {
  return article.price + 1
}

// ───────────────────────
// an array of objects with some known and some unknown properties.
// https://twitter.com/Stegosource/status/1395421390698733570

/**
 * @typedef {Array<{
 *   known: number
 *   yep: boolean
 *   defo: string
 *  }
 *  &
 *   Record<any, any>
 *  >
 * } MyCustomArray
 */

/** @type {MyCustomArray} */
const myArray = [{ known: 2, yep: true, defo: 'yay', xyz: '123' }]


// ───────Array of arrays────────────────
// https://stackoverflow.com/questions/66912667/whats-the-best-way-to-document-an-array-of-arrays-of-arrays-using-jsdoc

/** @typedef {[string, number, string]} MyTuple */

/** @type {MyTuple} */
const single = ['aqua-160', 160, 'PreCleaning']

/** @type {Array<Array<MyTuple>>} */
const nestedArrays = [ 
  [ 
    ['aqua-160', 160, 'PreCleaning'], 
    ['aqua-260', 260, 'PreCleaning']], 
  [ 
    ['aqua-360', 360, 'PostCleaning']
  ]
];

// ────────Conditional pair tuple ───────────────
// https://github.com/jsdoc/jsdoc/issues/1703#issuecomment-898203535

/**
 * @template IType
 * @template FnReturnType
 * @typedef {[IType, FnReturnType]} ConditionPair
 */

const state = 'foo'
function set_state() {}

/** @type ConditionPair<string, function> */
const tuple = [state, set_state]

/** @type ConditionPair<string, number> */
const tupleTwo = [state, 1]