

/**
 * myExportedFunc from common js
 * @param {number} [x] optional
 * @param {number=} y number or undefined
 * @param {number} [z=1] optional with default (default not show in type hint)
 */
function myExportedFunc(x, y, z = 1) {

}

module.exports = {
  myExportedFunc
}