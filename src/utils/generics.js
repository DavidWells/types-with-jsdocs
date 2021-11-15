// @ts-nocheck
// https://fettblog.eu/typescript-jsdoc-superpowers/

/**
 * @template T
 * @param {T} obj
 * @param {(keyof T)[]} params
 */
function pluck(obj, ...params) {
  return params.map(el => obj[el])
}

/** @type { <T, K extends keyof T>(obj: T, params: K[]) => Array<T[K]>} */
function values(obj, ...params) {
  return params.map(el => obj[el])
}

const article = {}

const numbers = values(article, 'price', 'vat')
const strings = values(article, 'title')
const mixed = values(article, 'title', 'vat')

// ───────────────────────
// https://github.com/homer0/packages/blob/main/packages/public/prettier-plugin-jsdoc/src/fns/utils.js#L8

/**
 * Ensures a given object is an array.
 *
 * @param {T | T[]} obj  The object to validate.
 * @returns {T[]}
 * @template T
 */
const ensureArray = (obj) => {
  if (Array.isArray(obj)) return obj
  return [obj]
}

const arr1 = ensureArray('foo')
const arr2 = ensureArray(true)


// ───────────────────────
// https://zenn.dev/asama/articles/0c66573e488b22

/**
 * @template T
 * @param {T} x - 戻り値に流用するジェネリクスパラメータ
 * @return {T}
 */
function id(x) {
  return x;
}
 
const a = id("string");
const b = id(123);
const c = id({});



// ───────────────────────
// https://github.com/giltayar/jsdoc-typing/blob/master/src/map-values.js

/**
 * @template {string|number|symbol} K
 * @template T
 * @template W
 * @param {Record<K, T>} object
 * @param {(t: T) => W} mapFunction
 *
 * @returns {Record<K, W>}
 */
function mapValues(object, mapFunction) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFunction(value)]))
}


// ───────────────────────
// https://twitter.com/techytacos/status/1419767168305033232


/** 
 * @typedef {{
 *  data : {
 *    foo: string
 *  }
 * }} Foo
 */

/**
 * @param {CustomEvent<Foo>} e
 */
function coolio(e) {
  console.log(e.detail.data.foo)
}

// ───────────────────────
// https://stackoverflow.com/questions/59243543/jsdoc-type-variables/59253145#59253145

 /**
  * @template A
  * @param {A} x
  * @return {A}
  */
 const idTwo = (x) => x;

 /** @type {string} */
 let strtwo = '';

 /** @type {number} */
 let numtwo = 1;

 strtwo = idTwo(true); // Type warning.

 strtwo = idTwo('string'); // Type safe.

 strtwo = idTwo(1234); // Type warning.

 numtwo = idTwo(true); // Type warning.

 numtwo = idTwo('string'); // Type warning.

 numtwo = idTwo(1234); // Type safe.

 // https://twitter.com/DerekNguyen10/status/1404307885635477507/photo/1


// ───────────────────────
// https://github.com/chunjin666/jsdoc-learning/blob/master/src/01-types/06-%40template.js

// You can use the @template tag to declare a type parameter, which can make the function, class, and type generic

/**
 * @template T
 * @param { T } x-a generic parameter that flows to the return type
 * @return {T}
 */
function id(x) {
  return x;
}

const ta = id('string');
const tb = id(123);
const tc = id({});

// You can use multiple tags to declare multiple type parameters

/**
 * @template T,U,V
 * @template W,X
 */

// You can specify a type restriction before the type parameter name

/**
 * @template {string} K - must be a string or character literal
 * @template {{ execute(s: string): string }} Executable - there must be an execute function, the parameters and return values ​​are strings
 * @param { K } key
 * @param {Executable} executable
 */
function execute(key, executable) {
  executable.execute(key);
}

// Another example of specifying type restrictions.
/**
 * @typedef {{a: string, b: number}} BaseOption
 */
/**
 * @template {{c: boolean}} T
 * @typedef {BaseOption & T} MergeOption
 */

/**
 * @type {MergeOption<{c: boolean, d: number}>}
 */
const option = { };
option.c
option.d

// You can assign a default value to the type parameter in this way, which is not supported by the editor. . .

/** @template [T=object] */
class CustomCache {
  /** @param {T} initial */
  constructor(T) {}
}
let c = new CustomCache();