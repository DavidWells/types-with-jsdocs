/**
 * Adds two numbers
 * 
 * @param {number} a number one
 * @param {number} b number two
 * @returns {number} sum of number one and number two
 * 
 * @example <caption>Add 1 and 3. If answer is >0, sums result and 5.</caption>
 * ```
 * const answer = sum(1, 3); // returns 4
 * 
 * if (answer > 0) {
 *   sum(answer, 5)
 * }
 * ```
 */
function sum(a, b) {
  return a + b
}


// ───────────────────────
// https://github.com/yamadapc/jsdoctest/blob/master/test/test-file-captioned.js

/**
 * @example <caption>Integers</caption>
 *   addMoreStuff(1, 2)
 *   // => 3
 *   addMoreStuff(3, 2)
 *   // => 5
 *
 * @example <caption>Doubles</caption>
 *   addMoreStuff(1.5, 2.5)
 *   // => 4
 */

function addMoreStuff(x, y) {
  return x + y;
}

// ───────────────────────
// https://github.com/jaydenseric/jsdoc-md#example-content

/**
 * Displays a message in a native popup window.
 * @kind function
 * @name popup
 * @param {string} message Message text.
 * @example <caption>Say `Hello!` to the user.</caption>
 * This usage:
 *
 * ```js
 * popup('Hello!');
 * ```
 *
 * Displays like this on macOS:
 *
 * ![Screenshot](https://octodex.github.com/images/yaktocat.png)
 */
const popup = (message) => alert(message);