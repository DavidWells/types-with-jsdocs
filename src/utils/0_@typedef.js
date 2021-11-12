/**
 * First name & last name
 * @typedef {{firstName: string, lastName: string}} BrokenName
 */

/**
 * @param {string} name
 * @returns {BrokenName}
 */
function breakName(name) {
  const [first, ...rest] = name.split(' ')

  return {
    firstName: first, 
    lastName: rest.join(' ')
  }
}