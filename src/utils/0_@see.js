// Inline link

/**
 * @see {@link foo} for further information.
 * @see {@link https://github.com|GitHub}
 */
export function bar() {}

// Internal link

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
export function foo() {}


// Pure http link

/**
 * external link documentation
 * @see https://reactjs.org/docs/context.html
 */

export const barTwo = () => '';
