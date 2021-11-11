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