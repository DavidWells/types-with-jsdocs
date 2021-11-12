/**
 * @typedef Auth
 * @property {string} username
 * @property {string} password
 */
/**
 * @typedef Token
 * @property {String} access_token
 */
/**
 * @param {Auth} auth
 *
 * @returns {Promise<Token>}
 */
async function login(auth) {
  return authenticateWithThirdPartyService(auth)
}

async function authenticateWithThirdPartyService(auth) {
  return {
    access_token: 'hi'
  }
}