/**
 * @type {string}
 */
var s;

/** @type {Window} */
var win;

/** @type {PromiseLike<string>} */
var promisedString;

// You can specify an HTML Element with DOM properties
/** @type {HTMLElement} */
if (document) {
  var myElement = document.querySelector('#foo');
  if (myElement) {
    // myElement.dataset.myData = "";
  }
}

// @type can specify a union type — for example, something can be either a string or a boolean.

/**
 * @type {(string | boolean)}
 */
var sb;

// Note that parentheses are optional for union types.

/**
 * @type {string | boolean}
 */
var sb;

// You can specify array types using a variety of syntaxes:

/** @type {number[]} */
var ns;
/** @type {Array.<number>} */
var nds;
/** @type {Array<number>} */
var nas;

// You can also specify object literal types. For example, an object with properties ‘a’ (string) and ‘b’ (number) uses the following syntax:

/** @type {{ a: string, b: number }} */
var var9;


// You can specify map-like and array-like objects using string and number index signatures, using either standard JSDoc syntax or TypeScript syntax.

/**
 * A map-like object that maps arbitrary `string` properties to `number`s.
 *
 * @type {Object.<string, number>}
 */
var stringToNumber;

/** @type {Object.<number, object>} */
var arrayLike;

// You can specify function types using either TypeScript or Closure syntax:

/** @type {function(string, boolean): number} Closure syntax */
var sbn;
/** @type {(s: string, b: boolean) => number} TypeScript syntax */
var sbn2;

// Or you can just use the unspecified Function type:

/** @type {Function} */
var fn7;
/** @type {function} */
var fn6;

// Other types from Closure also work:

/**
 * @type {*} - can be 'any' type
 */
var star;
/**
 * @type {?} - unknown type (same as 'any')
 */
var question;


// Casts

/**
 * @type {number | string}
 */
var numberOrString = Math.random() < 0.5 ? "hello" : 100;
var typeAssertedNumber = /** @type {number} */ (numberOrString);

// You can also import declarations from other files using import types. This syntax is TypeScript-specific and differs from the JSDoc standard:

// @filename: main.js
/**
 * @param { import("./types").Pet } p
 */
function walk(p) {
  console.log(`Walking ${p.name}...`);
}

// import types can also be used in type alias declarations:

/**
 * @typedef { import("./types").Pet } Pet
 */

/**
 * @type {Pet}
 */
var myPet = {
  name: 'foo'
};


// Parameters may be declared in a variety of syntactic forms
/**
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @return {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4) {
  // TODO
  return 'hello'
}
stringsStringStrings('hi')
stringsStringStrings('hi', 'optional', 'optional', 'optional')

// Likewise, for the return type of a function:

/**
 * @return {PromiseLike<string>}
 */
function ps() {
  return Promise.resolve('lol')
}

/**
 * @returns {{ a: string, b: number }} - May use '@returns' as well as '@return'
 */
function ab() {
  return {
    a: 'hi',
    b: 2
  }
}

// @typedef may be used to define complex types. Similar syntax works with @param.

/**
 * @typedef {Object} SpecialType - creates a new type named 'SpecialType'
 * @property {string} prop1 - a string property of SpecialType
 * @property {number} prop2 - a number property of SpecialType
 * @property {number=} prop3 - an optional number property of SpecialType
 * @prop {number} [prop4] - an optional number property of SpecialType
 * @prop {number} [prop5=42] - an optional number property of SpecialType with default
 */

/** @type {SpecialType} */
var specialTypeObject = {
  prop1: 'hi',
  prop2: 12
};

// You can use either object or Object on the first line.

/**
 * @typedef {object} SpecialType1 - creates a new type named 'SpecialType'
 * @property {string} prop1 - a string property of SpecialType
 * @property {number} prop2 - a number property of SpecialType
 * @property {number=} prop3 - an optional number property of SpecialType
 */

/** @type {SpecialType1} */
var specialTypeObject1;


// @param allows a similar syntax for one-off type specifications. Note that the nested property names must be prefixed with the name of the parameter:

/**
 * @param {Object} options - The shape is the same as SpecialType above
 * @param {string} options.prop1
 * @param {number} options.prop2
 * @param {number=} options.prop3
 * @param {number} [options.prop4]
 * @param {number} [options.prop5=42]
 */
function special(options) {
  const prop5 = options.prop5 || 2
  return (options.prop4 || 1001) + prop5;
}

// @callback is similar to @typedef, but it specifies a function type instead of an object type:

/**
 * @callback Predicate
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */

/** @type {Predicate} */
const ok = (s) => !(s.length % 2);

// Of course, any of these types can be declared using TypeScript syntax in a single-line @typedef:

/** @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialTypeTwo */
/** @typedef {(data: string, index?: number) => boolean} PredicateTwo */


// You can declare generic functions with the @template tag:

/**
 * @template T
 * @param {T} x - A generic parameter that flows through to the return type
 * @return {T}
 */
function id(x) {
  return x;
}

const a = id("string");
const b = id(123);
const c = id({});

// Use comma or multiple tags to declare multiple type parameters:

/**
 * @template T,U,V
 * @template W,X
 */


// You can also specify a type constraint before the type parameter name. Only the first type parameter in a list is constrained:

/**
 * @template {string} K - K must be a string or string literal
 * @template {{ serious(): string }} Seriousalizable - must have a serious method
 * @param {K} key
 * @param {Seriousalizable} object
 */
function seriousalize(key, object) {
  // ????
  return key
}


// Classes can be declared as ES6 classes.

class C {
  /**
   * @param {number} data
   */
  constructor(data) {
    // property types can be inferred
    this.name = "foo";

    // or set explicitly
    /** @type {string | null} */
    this.title = null;

    // or simply annotated, if they're set elsewhere
    /** @type {number} */
    this.size;

    this.cool(data);

    this.initialize(data.toString());
  }
  /**
   * @param {number} n
   */
  cool = function (n) {
    this.size = n;
  };
  /**
   * @param {string} s
   */
  initialize = function (s) {
    this.size = s.length;
  };
}

var x = new C(0);


// When Javascript classes extend a generic base class, there is nowhere to specify what the type parameter should be. The @extends tag provides a place for that type parameter:

/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}


// The @enum tag allows you to create an object literal whose members are all of a specified type. Unlike most object literals in Javascript, it does not allow other members.

/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};

JSDocState.SawAsterisk;

// Note that @enum is quite different from, and much simpler than, TypeScript’s enum. However, unlike TypeScript’s enums, @enum can have any type:

/** @enum {function(number): number} */
const MathFuncs = {
  add1: (n) => n + 1,
  id: (n) => -n,
  sub1: (n) => n - 1,
};

MathFuncs.add1;


// More examples

var someObj = {
  /**
   * @param {string} param1 - Docs on property assignments work
   */
  x: function (param1) {},
};

// /**
//  * As do docs on variable assignments
//  * @return {Window}
//  */
// let someFunc = function () {};

function Foo() {}
/**
 * And class methods
 * @param {string} greeting The greeting to use
 */
Foo.prototype.sayHi = (greeting) => console.log("Hi!");

/**
 * And arrow functions expressions
 * @param {number} x - A multiplier
 */
let myArrow = (x) => x * x;

/**
 * Which means it works for stateless function components in JSX too
 * @param {{a: string, b: number}} test - Some param
 */
var sfc = (test) => <div>{test.a.charAt(0)}</div>;

/**
 * A parameter can be a class constructor, using Closure syntax.
 *
 * @param {{new(...args: any[]): object}} C - The class to register
 */
function registerClass(C) {}

/**
 * @param {...string} p1 - A 'rest' arg (array) of strings. (treated as 'any')
 */
function fn10(p1) {}

/**
 * @param {...string} p1 - A 'rest' arg (array) of strings. (treated as 'any')
 */
function fn9(p1) {
  if (Array.isArray(p1)) {
    return p1.join();
  }
}