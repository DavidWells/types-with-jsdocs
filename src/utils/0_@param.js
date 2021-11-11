/**
 * Different types of param styles
 */

// default-numeric

/** @param {number} [x=1] d4 damage */
export function m(x) {}

// default-string

/**
 * @param {string} [somebody="John Doe"] - Somebody's name.
 */
export function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Hello ' + somebody);
}

// just-param

/**
 * @param somebody
 */
export function sayBye(somebody) {
  alert('Bye ' + somebody);
}


// name-type-description

/**
 * @param {string} somebody Somebody's name.
 */
export function sayYo(somebody) {
  alert('Yo ' + somebody);
}

// name-type

/**
 * @param {string} somebody
 */
export function sayNo(somebody) {
  alert('No ' + somebody);
}

// optional

/**
 * An optional parameter (using JSDoc syntax)
 * @param {string} [somebody] - Somebody's name.
 */
export function sayWoo(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Woo ' + somebody);
}

// with-hyphen-description

/**
 * @param {string} somebody - Somebody's name.
 */
export function sayWhat(somebody) {
  alert('What ' + somebody);
}
