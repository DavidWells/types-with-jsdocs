// https://github.com/englercj/tsd-jsdoc/issues/105#issue-524233914

/**
 * @constructor
 * @name Animal
 * @classdesc An animal.
 * @description Creates a new animal.
 */
function Animal() {
    this.x = 0;
    this.y = 0;
}

/**
 * @function
 * @name Animal#move
 * @description Move the animal to the specified location.
 * @param {Number} x - X-coordinate.
 * @param {Number} y - Y-coordinate.
 */
Animal.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

// /**
//  * @private
//  * @constructor
//  * @name Dog
//  * @extends Animal
//  * @classdesc A dog.
//  * @description Creates a new dog.
//  */
// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// /**
//  * @private
//  * @function
//  * @name Dog#bark
//  * @description The dog barks.
//  */
// Dog.prototype.bark = function () {
//     console.log('Woof!');
// }