// https://github.com/onury/jsdoc-x/blob/master/test/input-parse/name-test.js

(function () {
    'use strict';

    // NOTE: symbol descriptions should be unique

    /**
     *  foo
     *  @class
     */
    var foo = {};

    /**
     *  foo.bar
     *  @name foo.bar
     *  @function
     */

    /**
     *  foo.baz
     *  @name foo.baz
     *  @alias foo.bazAlias
     *  @function
     */

    /**
     *  foo.qux
     */
    foo.qux = function () {};

    foo.ns = {};

    /**
     *  foo.ns.m1
     *  @alias m1alias
     */
    foo.ns.m1 = function () {};

    /**
     *  foo.ns.m2
     *  @memberof foo.ns
     *  @name mx
     *  @alias ns.m2alias
     */
    foo.ns.m2 = function () {};

    /**
     *  foo.ns.m3
     *  @name m3name
     *  @function
     */
    foo.ns.m3 = function () {};

    /**
     *  foo.ns.m4
     *  @name ns.m4name
     *  @function
     */
    foo.ns.m4 = function () {};

    /**
     *  m5
     *  @memberof foo.ns
     */
    function m5() {}

    /**
     *  m6
     *  @memberof foo.ns
     *  @alias m6alias
     */
    function m6() {}

    /**
     *  Some name space.
     *  @memberof foo
     *  @type {Object}
     */
    var o = {};

    /**
     *  m7
     *  @memberof foo
     *  @alias m7alias
     */
    o.m7 = function () {};

    /**
     *  m8
     *  @memberof foo.o
     *  @alias m8alias
     */
    o.m8 = function () {};

    /**
     *  m9
     *  @memberof foo.o
     *  @alias m9alias
     */
    foo.o.m9 = function () {};

    /**
     *  foo.o.mx
     *  @memberof foo.o
     *  @alias m9alias
     */
    foo.o.mx = function () {};

})();