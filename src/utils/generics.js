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