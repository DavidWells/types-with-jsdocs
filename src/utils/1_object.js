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


/** 
 * Object with unknown keys
 * @type {{[key: string]: string}} 
 */
const obj = {};
obj.a = 'foo';
obj.b = 'bar';


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