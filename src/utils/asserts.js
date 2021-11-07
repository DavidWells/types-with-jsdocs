

/**
 * https://github.com/voxpelli/types-in-js/discussions/8
 * @param {any} value
 * @returns {value is Iterable<*>}
 */
const isIterable = (value) => Boolean(value && value[Symbol.iterator]);