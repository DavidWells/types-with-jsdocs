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