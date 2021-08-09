// Links are incorrect

/** @module Example */

/**
 * @class module:Example.Car
 * @property {Function} start {@link module:Example.Car#start}
 * @property {Function} stop {@link module:Example.Car#stop}
 *
 */
class Car {
    /**
    * @method module:Example.Car#start
    *
    */
    start () { /* function body */ }

    /**
    * @description You could use various other tags here, 
    * and JSDoc will still auto-assign the following namepath 
    * "module:Example.Car#stop" to this method
    *
    */
    stop () { 

    }
}