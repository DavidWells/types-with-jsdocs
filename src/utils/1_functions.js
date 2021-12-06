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
 * @param {string} prefix 
 * @returns {(baseStr: string) => string}
 */
const prependPrefix = (prefix) => (baseStr)=> `${prefix}${baseStr}`;

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


// ───────────────────────
// https://github.com/aminya/jsdoc2flow/blob/master/test/fixtures/annotated/test2.js#L5

/**
 * Function 1
 *
 * @param {object} obj
 * @param {string} obj.a
 * @param {string} obj.b
 * @param {object} obj.c
 * @param {object=} obj.d
 * @param {object=} obj.e
 * @returns {number}
 */
const fn1 = ({ a, b, c, d, e }) => {
  return 1
}


// ───────────────────────
// https://github.com/andreidmt/tpl-ts-jsdoc/blob/master/src/hello-world.js#L6

/**
 * @typedef  {Object} SayHelloFnReturn
 *
 * @property {string} beep
 * @property {string} boop
 */

/**
 * Function with types infered from docs, 2 birds in hand.
 *
 * @param   {Object}           [props={}]
 * @param   {"lorem"|"dolor"}  [props.foo="lorem"]
 * @param   {string}           [props.bar="ipsum"]
 *
 * @returns {SayHelloFnReturn}
 */
const sayOy = ({ foo = "lorem", bar = "ipsum" } = {}) => ({
  beep: `oy ${foo}`,
  boop: `oy ${bar}`,
})

const robotSays = sayOy({ foo: "dolor" })


// ───────────────────────
// https://github.com/homer0/parserror/blob/c12b20e3a321e1e01f41178eceb1d3210991d40f/src/parserror.js#L240


/**
 * An object with a signature similar to an {@link Error} that {@link Parserror} can
 * parse.
 *
 * @typedef {Object} ParserrorErrorObject
 * @property {string} message  The error message.
 */

/**
 * The options that can be used to customize how {@link Parserror#parse} works.
 *
 * @typedef {Object} ParserrorParseOptions
 * @property {string[]} cases     A list of specific cases it should validated against.
 * @property {string[]} scopes    A list of specific scopes it should use to valdiate the
 *                                error.
 * @property {?string}  fallback  A fallback message in case the error can't be parsed.
 *                                If not specified, the returned error will maintain the
 *                                original message.
 */

/**
 * A custom version of `Error` so the Parserror can store the parsing parameters and some
 * context information.
 * 
 * @augments Error
 */
class FormattedError extends Error {
  /**
   * @param {string} message
   * The error message.
   * @param {Object.<string, string> | string[]} [params={}]
   * The parsed parameters Parserror. When parsing a case that uses named groups, the
   * parameters are stored on an `object`; otherwise, they'll be an `array`.
   * @param {?Object} [context=null]
   * Any extra context information for the error.
   */
  constructor(message, params = {}, context = null) {
    super(message);
    /**
     * The parsed parameters Parserror found. When parsing a case that uses named groups,
     * the parameters are stored on an `object`; otherwise, they'll be an `array`.
     *
     * @type {Object.<string, string> | string[]}
     * @todo Remove `Object.freeze`.
     */
    this.params = params;
    /**
     * Any extra context information for the error.
     *
     * @type {Object}
     * @todo Remove `Object.freeze`.
     */
    this.context = Object.freeze(context || {});

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Parses and formats an error.
 *
 * @param {Error | string | ParserrorErrorObject} error
 * The error to parse.
 * @param {Partial<ParserrorParseOptions>} [options={}]
 * Options to customize how the parsing is done.
 * @returns {FormattedError}
 * @throws {TypeError}
 * If `error` is not an {@link Error}, a string or a {@link ParserrorErrorObject}.
 */
function parse(error, options = {}) {
  const useOptions = {
    cases: [],
    scopes: [],
    fallback: null,
    ...options,
  };
  return new FormattedError('foobar', {}, { original: true });
}

parse('lol', {
  cases: ['cool'],
})
