/** @type {string} */
const str = 'string';

/** @type {number} */
const num = 123;

/** @type {boolean} */
const bool = true;

/** @type {null} */
const nul = null;

/** @type {undefined} */
const und = undefined;

/** @type {symbol} */
const sym = Symbol('foo');

/** @type {*} */
const jsDocAny = 'any value';

/** @type {any} */
const tsAny = 'any value';

/** @type {unknown} */
const tsUnknown = 'unknown value';

/** @type {PromiseLike<string>} */
var promisedString = Promise.resolve('hi')

// Enum into Array
// https://medium.com/@antonkrinitsyn/jsdoc-frequent-patterns-436dad6dbee1
/**
 * @typedef {'ally' | 'enemy'} PlayerType
 *
 * @typedef Player
 * @property {PlayerType} type
 */

/** @type {Player[]} */
const players = [
  {
    type: 'ally',
  }
]