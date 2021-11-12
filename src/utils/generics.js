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
 const id = (x) => x;

 /** @type {string} */
 let str = '';

 /** @type {number} */
 let num = 1;

 str = id(true); // Type warning.

 str = id('string'); // Type safe.

 str = id(1234); // Type warning.

 num = id(true); // Type warning.

 num = id('string'); // Type warning.

 num = id(1234); // Type safe.