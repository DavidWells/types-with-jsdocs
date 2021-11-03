/**
 * Person object
 * @typedef {Object} Person
 * @prop {string} name
 * @prop {number} age
 */

/**
 * @typedef {Object} Job
 * @prop {string} [job]
 */

/**
 * Person with optional job
 * @typedef {Person & Job} Bozo
 */

/**
 * @type {Person}
 */
const personNoJob = {
  name: 'Bozo the Clown',
  age: 50,
}

/**
 * @type {Bozo}
 */
const bozo1 = {
  name: 'Bozo the Clown',
  age: 50,
  job: 'clown'
}

/**
 * @type {Bozo}
 */
const bozo2 = {
  name: 'Bozo the Clown',
  age: 50,
}
