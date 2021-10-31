/**
 * @function
 * @template A
 * @param {A} val
 * @returns {Promise<A>}
 */
function selfResolved(val) {
  return Promise.resolve(val)
}