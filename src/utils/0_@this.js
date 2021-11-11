/**
 * @this {HTMLElement}
 * @param {*} e
 */
function callbackForLater(e) {
  console.log(this.clientHeight, e)
}