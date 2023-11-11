// https://twitter.com/dr_sensor/status/1723468421722210367

/*
Import a d.ts file and reference exported types
*/

/**
 * @typedef {import("./imports/my.d.ts")} $ 
 */

/** @type $["myFun"] */
export function fun(a, b, c) {
 return 1
}
