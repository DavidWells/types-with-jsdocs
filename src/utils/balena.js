// https://www.balena.io/blog/open-source-guide-1-documentation-and-jsdoc/

// Public Function

/**
 * @summary Sum two numbers
 * @function
 * @public
 *
 * @param {Number} x - first number
 * @param {Number} y - second number
 * @returns {Number} the sum of the two numbers
 *
 * @example
 * const result = math.sum(5, 3);
 * console.log(result);
 * > 8
 */
exports.sum = (x, y) => {  
  return x + y;
};

// Private Function

/**
 * @summary Check if a variable is a string
 * @function
 * @private
 *
 * @param {*} x - variable
 * @returns {Boolean} whether the variable is a string
 *
 * @example
 * if (isString('foo')) {
 *   console.log('The variable is a string');
 * }
 */
const isString = (x) => {  
  return typeof x === 'string' || x instanceof String;
};

// Constant Variable

/**
 * @summary Default size
 * @type Number
 * @constant
 * @private
 */
const DEFAULT_SIZE = 16; 

// Object

/**
 * @summary Exit codes
 * @namespace EXIT_CODES
 * @private
 */
const EXIT_CODES = {

  /**
   * @property {Number} SUCCESS
   * @memberof EXIT_CODES
   *
   * @description
   * This exit code is used to represent a successful exit status.
   */
  SUCCESS: 0,

  /**
   * @property {Number} ERROR
   * @memberof EXIT_CODES
   *
   * @description
   * This exit code is used to represent an erroneous exit status.
   */
  ERROR: 1

};

// Optional Parameter

/**
 * @summary Split a string
 * @function
 * @public
 *
 * @param {String} string - input string
 * @param {String} [delimiter=' '] - delimiter
 * @returns {String[]} splitted string
 *
 * @example
 * const result = utils.split('foo bar baz');
 * console.log(result);
 * > [ 'foo', 'bar', 'baz' ]
 *
 * @example
 * const result = utils.split('hello_world', '_');
 * console.log(result);
 * > [ 'hello', 'world' ]
 */
exports.split = (string, delimiter = ' ') => {  
  return string.split(delimiter);
};

// Object Parameter

/**
 * @summary Tail a string
 * @function
 * @private
 *
 * @param {String} string - input string
 * @param {Object} [options={}] - options
 * @param {String} [options.delimiter='\n'] - string delimiter
 * @param {Number} [options.lines=10] - number of lines to show
 * @returns {String[]} tailed string
 *
 * @example
 * const result = tail('foo\nbar\nbaz', {
 *   delimiter: '\n',
 *   lines: 2
 * });
 *
 * console.log(result);
 * > 'bar\nbaz'
 */
const tail = (string, options = {}) => {  
  const delimiter = options.delimiter || '\n';
  const lines = options.lines || 10;

  return string
    .split(delimiter)
    .slice(lines)
};

// Promise

/**
 * @summary Get a promise that resolves a value
 * @function
 * @private
 *
 * @param {*} value - value
 * @fulfil {*} - value
 * @returns {Promise}
 *
 * @example
 * resolve(5).then((value) => {
 *   console.log(value);
 * });
 * > 5
 */
const resolve = (value) => {  
  return Promise.resolve(value);
};

// Class


/**
 * @summary Create an instance of Person
 * @name Person
 * @class
 * @public
 *
 * @param {String} name - person name
 * @returns {Person} Person instance
 *
 * @example
 * const person = new Person('Juan Cruz Viotti');
 */
export class Person {
  constructor(name) {
    this.name = name;
  }

  /**
   * @summary Greet
   * @method
   * @public
   *
   * @example
   * const person = new Person('Juan Cruz Viotti');
   * person.greet();
   * // Hi, my name is Juan Cruz Viotti
   */
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }

}