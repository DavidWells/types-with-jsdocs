// https://www.jacobparis.com/blog/jsdoc-cheatsheet#type-parameters
/**
 * @template {PropertyKey} T
 * @template {PropertyKey} U
 *
 * @param {Record<T, U>} input
 * @returns {Record<U, T>}
 */
function reverseRecord(input) {
  const entries = Object.entries(
    input,
  ).map(([key, value]) => [value, key])
  return Object.fromEntries(entries)
}

reverseRecord({ foo: 'bar'})