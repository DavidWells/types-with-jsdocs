// ───────Object overload───────
// https://github.com/BeyondCodeBootcamp/jsdoc-typescript-starter

/**
 * @typedef Foo
 * @property {string} foo
 */
 
/**
 * @typedef Bar
 * @property {string} bar
 */

/** @type {Foo & Bar} */
var foobar = { foo: "foo", bar: "bar" };

/** @typedef {Foo & Bar} FooBar */
/** @type {FooBar} */
var foobar = { foo: "foo", bar: "bar" };


// ───────────────────────
// https://austingil.com/typescript-function-overloads-with-jsdoc/

// A Naive Solution
/**
 * @param {string | number} input 
 * @returns {string | number}
 */
function double(input) {
  if (typeof input === 'number') {
    return input * 2
  }
  return input + input
}

// /**
//  * @type {{
//  * (input: number) => number;
//  * (input: string) => string;
//  * }}
//  */
// const doubleTwo = (input) => {
//   if (typeof input === 'number') {
//     return input * 2
//   }
//   return input + input
// }

// ───────────────────────

// via https://github.com/microsoft/TypeScript/issues/25590#issuecomment-942782630
/**
 * This function takes a number and a string.
 * @callback signatureA
 * @param {number} num
 * @param {string} str
 */

/**
 * This function takes a boolean and an object
 * @callback signatureB
 * @param {boolean} bool
 * @param {Object} obj
 */

/**
 * This function takes a boolean and an object
 * @callback signatureC
 * @param {Person} person
 * @param {boolean} bool
 */

/**
 * @param {Parameters<signatureA> | Parameters<signatureB> | Parameters<signatureC>} args
 */
function overloaded(...args) {

}

overloaded(1, '2')
overloaded(true, {})
overloaded({ name: 'bob', age: 11 }, true)





// https://github.com/microsoft/TypeScript/issues/25590#issuecomment-790713772

/**
@typedef {{
    (s: string): 0 | 1
    (b: boolean): 2 | 3
    [k:string]: any
}} Gioconda
*/

/** @type {Gioconda} */
const monaLisa = (
/** @param {string|boolean} sb */
(sb) => {
    return typeof sb === 'string' ? 1 : 2;
});

const obj = {
    /** @type {Gioconda} */
    monaLisa: (
    /** @param {string|boolean} sb */
    (sb) => {
        return typeof sb === 'string' ? 1 : 2;
    })
};

class MonaLisa {
    /** @type {Gioconda} */
    monaLisa = (
    /** @param {string|boolean} sb */
    (sb) => {
        return typeof sb === 'string' ? 1 : 2;
    })
}

/** @type {2 | 3} - call resolve to (b: boolean) => 2 | 3 */
var twothree = monaLisa(false);
/** @type {2 | 3} - call resolve to (b: boolean) => 2 | 3 */
var twothreeObj = obj.monaLisa(false);
/** @type {2 | 3} - call resolve to (b: boolean) => 2 | 3 */
var twothreeClass = new MonaLisa().monaLisa(false);

// js special property assignment should still be allowed
monaLisa.overdrive = true;
obj.monaLisa.overdrive = true;
MonaLisa.prototype.monaLisa.overdrive = true;



// ───────────────────────
// https://github.com/micromark/micromark/blob/2b1fafb5f3ad0d1c9329ffbc80be1cbd411f5468/packages/micromark/dev/index.js#L12-L30

/**
 * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'latin1'|'binary'|'hex'} Encoding
 *   Encodings supported by the buffer class.
 *   This is a copy of the typing from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a2bc1d8/types/node/globals.d.ts#L174>
 *
 * @typedef {string|Uint8Array} Value
 *   Contents of the file.
 *   Can either be text, or a `Buffer` like structure.
 */

/**
 * @typedef {Record<string, Record<string, unknown>>} Extension
 *   A syntax extension changes how markdown is tokenized.
 *   See: <https://github.com/micromark/micromark#syntaxextension>
 */

/**
 * @typedef ParseOptions
 *   Parse options.
 * @property {Extension[]} [extensions] Array of syntax extensions
 */

/**
 * @typedef CompileOptions
 *   Compile options
 * @property {'\r'|'\n'|'\r\n'} [defaultLineEnding]
 *   Value to use for line endings not in `doc` (`string`, default: first line
 *   ending or `'\n'`).
 * @property {boolean} [allowDangerousHtml=false]
 *   Whether to allow embedded HTML (`boolean`, default: `false`).
 * @property {boolean} [allowDangerousProtocol=false]
 */
 
/**
 * @typedef {ParseOptions & CompileOptions} Options
 */

/**
 * @param value Markdown to parse (`string` or `Buffer`).
 * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
 * @param [options] Configuration
 */
export const micromark =
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options) => string) &
   *   ((value: Value, options?: Options) => string)
   * )}
   */
  (
    /**
     * @param {Value} value
     * @param {Encoding} [encoding]
     * @param {Options} [options]
     */
    function (value, encoding, options) {
      if (typeof encoding !== 'string') {
        options = encoding
        encoding = undefined
      }

      return value
    }
  )

// ───────────────────────

// /**
//  * Does something
//  * @callback foo_overload1
//  * @param {number} arg1 Something
//  */

//  /**
//  * Does something else
//  * @callback foo_overload2
//  * @param {string} arg1 Something else
//  * @param {number} arg2 Something
//  */

// /** @type { foo_overload1 | foo_overload2 } */
// function fooBarFunc(arg1, arg2) {

// }