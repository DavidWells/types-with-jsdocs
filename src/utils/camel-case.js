import * as TypeFest from 'type-fest'

/**
 * @template T
 * @typedef { { [K in keyof T as TypeFest.CamelCase<K>]: T[K] }} CamelCasedProps
 */

/**
 * @typedef DbResult
 * @property {string} full_name
 * @property {string} street_address
 * @property {SomethingGlobal} [something]
 */

/** @type {CamelCasedProps<DbResult>} */
const person = {
  fullName: 'Bob Bobson',
  streetAddress: 'Infinite loop 1',
  something: 'value2'
};


/** @type {CamelCasedPropsGlobal<DbResult>} */
const personTwo = {
  fullName: 'Bob Bobson',
  streetAddress: 'Infinite loop 1',
  something: 'value'
};