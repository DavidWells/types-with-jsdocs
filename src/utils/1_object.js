// Object with optional property

/**
 * User type definition
 * @typedef {Object} User
 * @property {string} email
 * @property {string} [nickName]
 */
export const user = {
  email: 's',
}

// Object with nested values

/**
 * @typedef Config
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
export const config = {
  defaults: {
    players: 1,
    level: 'beginner',
    treasure: {
      gold: 0,
    },
  },
}

// Using typedefs

/**
 * JSDoc style
 * @typedef {object} Rgb
 * @property {number} red
 * @property {number} green
 * @property {number} blue
 */

/** @type {Rgb} */
const color = { red: 255, green: 255, blue: 255 };

/**
 * TypeScript style
 * @typedef {{ brand: string; color: Rgb }} Vehicle
 */

/** @type {Vehicle} */
const car = {
  brand: 'Some Brand',
  color: { red: 255, green: 255, blue: 255 },
};

// Object with unknown number of keys

/** 
 * Object with unknown keys
 * @type {{[key: string]: string}} 
 */
const obj = {};
obj.a = 'foo';
obj.b = 'bar';


// ──────Object with Date────────

/**
 * @typedef Thing
 * @property {string} id
 * @property {number} index
 * @property {Date} expires
 * @property {function} callback
 */

/** @type Thing */
let thing = {
  id: 'id',
  index: 1,
  expires: new Date(),
  callback: function () {}
}

// ────────How to define a hashmap / dictionary / plain object───────────────
/**
 * @typedef ThingTwo
 * @property {Record<string, any>} stuff
 */

/** @type ThingTwo */
let thingTwo = {
  stuff: {
    xyz: 'abc',
  }
}

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
var zaz = { foo: "foo", bar: "bar" };

// ───────────────────────

// Function with TypeScript style shorthand with optional values

/**
 *	@param {string} selector
 *	@param {{
 *	 name?: string
 *	 stopIf?: () => boolean
 *	 context?: Document | HTMLElement
 *	 timeout?: number
 *	}} options
 *	@returns {Promise<HTMLElement>}
*/
function getElement(selector, {
  name = '',
  stopIf = () => true,
  context = document,
  timeout = Infinity,
} = {}){
  return new Promise((resolve) => {

  })
}

getElement('test')
/* // type errors
getElement('test', { unexpected: true })
getElement('test', { timeout: '123' })
/** */


// ────── Recursive property ────────

// https://github.com/BeyondCodeBootcamp/jsdoc-typescript-starter/blob/38fb9ff20940f7127724578530e3ae823fd07d5f/types.js#L15

/**
 * @typedef {Object} AppUser
 * @property {string} given_name
 * @property {string} family_name
 * @property {string} [favorite_movie]
 * @property {string} favorite_book
 * @property {Array<AppUser>} [friends]
 * @property {Record<string,any> | null} [stuff]
 */

/** @type AppUser */
const appUser = {
  given_name: 'bob',
  family_name: 'smith',
  favorite_book: 'harry potter',
  stuff: {
    hi: 'there'
  },
  friends: [{
    given_name: 'bob',
    family_name: 'smith',
    favorite_book: 'harry potter',
  }],
}


// ───────────────────────
// https://gist.github.com/hrdtbs/f7e567c0738725a16a9de7326dc11127

/**
 * @typedef {Object<string, number>} TestProps
 */
/**
 * @type {TestProps}
 */
const x = {
  foobar: 1,
  no: 2
}


// ───────────────────────
// Partial object with optional keys via {Partial}

/**
 * My object
 *
 * @typedef {Object} MyObjectWithOptionalParams
 * @property {string[]} cases     A list of specific cases it should validated against.
 * @property {string[]} scopes    A list of specific scopes it should use to valdiate the error.
 * @property {?string}  fallback  A fallback message in case the error can't be parsed. If not specified, the returned error will maintain the original message.
 */

/** @type {Partial<MyObjectWithOptionalParams>} */
const objectWithOptionalKeys = {
  cases: ['xyz']
}