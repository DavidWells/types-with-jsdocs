/**
 * @typedef {React.HTMLAttributes<HTMLDivElement>} DOMDiv
 */

/**
 * @typedef {Object} Props
 * @prop {string} [myprop]
 */

/**
 * @typedef {DOMDiv & Props} Thing
 */

/**
 * @type {Thing}
 */
const bozo = {
  myprop: 'clown',
}

/**
 * @type {DOMDiv & Props}
 */
const bozoz = {
  myprop: 'Bozo the Clown',
  id: 'xyxyx',
}