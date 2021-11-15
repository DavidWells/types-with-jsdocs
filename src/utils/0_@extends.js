// The @augments or @extends tag indicates that a symbol inherits from, and potentially adds to, a parent symbol. 
// You can use this tag to document both class-based and prototype-based inheritance.

/**
 * @constructor
 */
function AnimalTwo() {
    /** Is this animal alive? */
    this.alive = true;
}

/**
 * @constructor
 * @augments AnimalTwo
 */
class DuckTwo extends AnimalTwo {
	quack(stuff) {
		console.log(`Doing some pretty crazy stuff with ${stuff}`);
	}
}

/** What do ducks say? */
DuckTwo.prototype.speak = function() {
    if (this.alive) {
        alert('Quack!');
    }
};

var d = new DuckTwo();
console.log('d', d)
d.speak(); // Quack!
d.alive = false;
d.speak(); // (nothing)