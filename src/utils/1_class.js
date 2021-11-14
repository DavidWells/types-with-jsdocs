
// ───────────────────────
// https://github.com/giltayar/jsdoc-typing/blob/master/src/class.js

class PersonClass {
  /**@type {string}*/
  firstName
  /**@type {string}*/
  lastName

  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  /**
   * @returns {string}
   */
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new PersonClass('bob', 'smith')

// https://fettblog.eu/typescript-jsdoc-superpowers/

/**
 * Creates a new Person.
 * @class
 */
export function Person() {
  
}

// ───────────────────────
// https://ics.media/entry/6789/

/**
 * Count Manager class
 * @constructor
 */
function CountManager() {
  /**
   * Current count
   * @type {Number}
   */
  this._count = 0;

  /**
   * Add to count
   */
  this.addCount = function() {
    this._count++;
  };

  /**
   * Get current count
   * @return {Number} current count
   */
  this.getCount = function() {
    return this._count;
  };
}

// ───────────────────────


/**
 * this is BaseClass.
 */
export class BaseClass {
  /**
   * this is a method of BaseClass.
   * @returns {string} a greeting.
   */
  baseMethod(){
    return 'this is base method';
  }
}

/**
 * this is MyClass.
 */
export default class MyClass extends BaseClass {
  /**
   * creates a instance of MyClass.
   * @param {number} value - initial value.
   */
  constructor(value){
    /**
     * this is property of MyClass.
     * @type {number}
     * @private
     */
    super()
    this._property = value;
  }

  /**
   * this is method of MyClass.
   * @param {number} a - this is a 1st number value.
   * @param {number} b - this is a 2nd number value.
   * @returns {string} repeated Hello
   */
  method(a, b){
    return 'Hello'.repeat((a + b) * this._property);
  }
}

// ───────────────────────
// https://github.com/joelday/vscode-docthis/blob/master/test/largeFile.ts

/**
 * This description was written from the 
 *
 * @class SomeClass
 */
class SomeClass {
    /**
     * Testing a property.
     *
     * @memberOf SomeClass
     */someProperty = true;

    /**
     * This description was written from the Ctrl+Alt+D D shortcut.
     *
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     *
     * @memberOf SomeClass
     */
    someFunction1(someParam1, someParam2) {
        return true;
    }

    /**
     * This is a test of the enableJumpToDescriptionLocation setting set to true.
     *
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     *
     * @memberOf SomeClass
     */
    someFunction2(someParam1, someParam2) {
        return true;
    }

    /**
     * This one was a successful test with the setting off
     *
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     *
     * @memberOf SomeClass
     */
    someFunction3(someParam1, someParam2) {
        return true;
    }

    /**
     * Test with private.
     *
     * @private
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     *
     * @memberOf SomeClass
     */
    someFunction4(someParam1, someParam2) {
        return true;
    }

    /**
     * Test with public.
     *
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     *
     * @memberOf SomeClass
     */
    someFunction5(someParam1, someParam2) {
        // Suppress unused function error
        this.someFunction4('string', 2);
        return true;
    }

    /**
     * Test with static.
     *
     * @static
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     *
     * @memberOf SomeClass
     */
    static someFunction6(someParam1, someParam2) {
        return true;
    }

    /**
     * Testing with docthis.includeMemberOfOnClassMembers set to false
     *
     * @param {string} someParam1
     * @param {number} someParam2
     * @returns {boolean}
     */
    someFunction7(someParam1, someParam2) {
        return true;
    }
}


// ───────────────────────
// https://github.com/discordjs/docgen/blob/master/test/src/SomeClass.js

const EventEmitter = require('events').EventEmitter;

/**
 * A very classy class with lots of class
 * @extends EventEmitter
 */
class ClassyClass extends EventEmitter {
	/**
	 * Constructs a thing.
	 */
	constructor() {
		super();

		/**
		 * Just some thing
		 * @type {?number}
		 */
		this.thing = 42;
	}

	/**
	 * Does stuff.
	 * @param {?string} stuff Stuff to do
	 * @param {StuffDoer} doer Callback to do the stuff
	 * @returns {?number} A thing
	 */
	doStuff(stuff, doer) {
		console.log(`Doing some pretty crazy stuff with ${stuff}`);
		doer(stuff);
		return this.thing;
	}

	/**
	 * Who knows what this does.
	 * @emits ClassyClass#thingDone
	 */
	hmm() {
		console.log('Hmmmm..');

		/**
		 * Emitted when a thing is done
		 * @event ClassyClass#thingDone
		 * @param {SomeThing} thingy Thing
		 */
		this.emit('thingDone', 4242424242);
	}
}

/**
 * Just some thing
 * @typedef {Object} SomeThing
 * @property {number} someNumber A really cool number
 */

/**
 * Does some stuff with some other stuff.
 * @callback StuffDoer
 * @param {?string} stuff Stuff to use to do stuff
 */

/**
 * @external ClientOptions
 * @see {@link http://hydrabolt.github.io/discord.js/#!/docs/tag/master/typedef/ClientOptions}
 */