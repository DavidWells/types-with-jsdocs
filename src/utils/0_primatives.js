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