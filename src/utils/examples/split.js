// https://twitter.com/anuraghazru/status/1444712396673613824

/**
 * @template T {string}
 * @template K {string}
 * @typedef {T extends `${infer P1}${K & string}${infer P2}`
 *  ? [P1, ...Split<P2, K>]
 *  : [T]
 * } Split
 */


/**
 * Hover over `prop`
 * @typedef {Split<'Hello World', ' '>} prop
 */