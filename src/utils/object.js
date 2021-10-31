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