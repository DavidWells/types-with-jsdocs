/**
 * JSDoc style named function type
 * @callback AddStuff
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

/** @type {AddStuff} */
const addStuff = (x, y) => x + y;

/**
 * TypeScript style inline function type
 * @typedef {(x: number, y: number) => number} TsAdd
 */

/** @type {TsAdd} */
const tsAdd = (x, y) => x + y;

/**
 * JSDoc style type function with function declaration
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function addDec(x, y) {
  return x + y;
}



/**
 * JSDoc style optional parameter
 * @param {number} [x] optional
 * @param {number=} y number or undefined
 * @param {number} [z=1] optional with default (default not show in type hint)
 */
function jsDocOptional(x, y, z = 1) {}


/**
 * JSDoc style rest parameter
 * @param {...number} num
 * @returns {number}
 */
function sum(...num) {
  return num.reduce((s, v) => s + v, 0);
}

/**
 * TypeScript style rest parameter
 * @param {number[]} num
 */
function tsSum(...num) {
  return num.reduce((s, v) => s + v, 0);
}

/**
 * No explicit return value
 * @returns {void}
 */
function noReturn() {
  console.log('no explicit return');
}

/**
 * Function never return
 * @returns {never}
 */
function neverReturn() {
  throw Error('ERRORRRRR');
}

/**
 * Function no returrn value https://fettblog.eu/typescript-jsdoc-superpowers/
 * @param {string} url
 * @param {(status: number, response?: string) => void} cb
 */
function loadData(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.onload = () => {
    cb(xhr.status, xhr.responseText)
  }
}


/** 
 * Default numeric param
 * @param {number} [x=1] d4 damage 
 */
export function m(x) {
  return x
}

/**
 * Default string param
 * @param {string} [somebody="John Doe"] - Somebody's name.
 */
export function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Hello ' + somebody);
}

/**
 * Just params
 * @param somebody
 */
export function sayBye(somebody) {
  alert('Bye ' + somebody);
}


/**
 * @typedef {Object} Toast
 * @property {string} id
 * @property {boolean} closed - Indicates whether user has close the toast.
 * @property {Date} generatedOn - Indicates when the toast was generated.
 * @property {string} message - toast content.
 * @property {"warn" | "info"} type -  Indicates type of toast.
 * Also useful to show different icons.
 */

/**
 * A function for showing toast
 * @param {Toast} toast - {@link toast} object
 * containing all components of the toast.
 */
export function showToast(toast) {}

// ───────────────────────
// https://twitter.com/jbscript/status/1415553540823535627/photo/1

/**
 * @param {string} selector
 * @param {{
 *   name?: string
 *   stopIf?: () => boolean
 *   context?: Document | HTMLElement
 *   timeout?: number
 * }} options
 * @returns {Promise<HTMLElement>}
 */
function getElement(selector, {
  name = '',
  stopIf = () => true,
  context = document,
  timeout = Infinity,
} = {}) {
  return new Promise((resolve) => {

  })
}
