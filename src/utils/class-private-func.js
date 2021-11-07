// https://github.com/microsoft/TypeScript/issues/13206#issuecomment-869194939

/** The parent object.
 *  @constructor 
 *  @param {*} arg - A parameter that has to be passed in on construction. */
function Parent(arg) {
    /** Public function. In the documentation, this description will carry
     *  over to the child object. In the IDE, only typechecking will.
     *  @param {string} name - User's name.
     *  @returns {string} string **/
    this.hello = function(name) {
        return "Hello " + name;
    }
}

/** The child object. 'augments' is what jsdocs uses to detect inheritance.
 *  'augments' creates an IDE error, which the ts-ignore flag suppresses.
 *  @constructor
 *  @param {*} arg - A parameter that has to be passed in on construction.
 *  @augments Parent
 *  @ts-ignore */
function Child(arg) {
    Parent.call(this, arg);
    
    // Dummy section to initialize properties from superclass
    
    // eslint-disable-next-line
    if (true) {
        // @ts-ignore
        var dummy = new Parent(null);
        this.hello = dummy.hello;
    }

    // New code goes below . . . 

    this.hello("abc"); // This will trigger: TS2722: Cannot invoke an object which is possibly 'undefined'

    this.anotherFunction = function() {
      this.hello("def"); // This triggers no warning and has correct type/Intellisense comment
    }
}