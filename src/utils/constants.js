// @ts-nocheck til 4.5.0
// https://github.com/microsoft/TypeScript/issues/30445#issuecomment-571422490

/** 
 * @constant
 * @type {string}
 * @default
*/
const RED = 'FF0000';

/** @constant {number} */
var ONE = 1;

// ONE = 'x' // fails

const isConst = /** @type {const} */ ({
    hello: "world, not string"
})

var asConst1 = /** @type {const} */(1);
var asConst2 = /** @type {const} */({
    x: 1
});
