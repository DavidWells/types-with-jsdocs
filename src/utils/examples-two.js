



function xyz(pred, actual, expected, msg, msgtwo) {

}

/**
 * @param {unknown} actual
 * @param {unknown} expected
 * @param {string} [msg]
 * @returns {void}
 */
function notEqual(actual, expected, msg) {
  xyz(actual !== expected, actual, expected, msg || 'should not be equal', 'notEqual')
}

notEqual(false, 'whatever', 'woowowow')

/**
 * Does xyz
 * @returns {Promise<{
 *   pass: number,
 *   fail: number
 * }>}
 */
async function run() {
  return Promise.resolve({
    pass: 1,
    fail: 3
  })
}

/**
 * @param {Error} e
 * @returns {string}
 */
function findAtLineFromError (e) {
  return 'lol'
}

/**
 * @param {Error | null} err
 * @param {string} [msg]
 * @returns {void}
 */
function ifError(err, msg) {
  xyz(!err, err, 'no error', msg || String(err), 'ifError')
}