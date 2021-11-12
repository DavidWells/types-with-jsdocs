// https://github.com/wooorm/f-ck/blob/main/index.js
// https://github.com/wooorm/f-ck/blob/main/package.json
/*
"scripts": {
    "prepublishOnly": "npm run build && npm run format",
    "build": "rimraf \"*.d.ts\" && tsc && type-coverage",
    "format": "remark . -qfo && prettier . -w --loglevel warn && xo --fix",
    "test-api": "node --conditions development test.js",
    "test-coverage": "c8 --check-coverage --branches 100 --functions 100 --lines 100 --statements 100 --reporter lcov npm run test-api",
    "test": "npm run build && npm run format && npm run test-coverage"
  },
*/
/**
 * `butt` > `b*tt`
 *
 * @param {string} value
 * @param {string} [character='*']
 * @returns {string}
 */
export function vowel(value, character) {
  return value.replace(/[aeiouy]/g, character || '*')
}

/**
 * `butt` > `b**t`
 *
 * @param {string} value
 * @param {string} [character='*']
 * @returns {string}
 */
export function inner(value, character) {
  if (value.length <= 2) {
    return value
  }

  return (
    value.charAt(0) +
    (character || '*').repeat(value.length - 2) +
    value.charAt(value.length - 1)
  )
}

/**
 * `butt` > `@#$%`
 *
 * @param {number|string} value
 * @param {string} [pattern='@#$%!&?']
 * @returns {string}
 */
export function grawlix(value, pattern = '@#$%!&?') {
  const length = typeof value === 'number' ? value : value.length
  return (
    pattern.repeat(Math.floor(length / pattern.length)) +
    pattern.slice(0, length % pattern.length)
  )
}