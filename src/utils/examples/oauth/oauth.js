// https://www.codejam.info/2021/10/jsdoc-typescript-inside-javascript.html
const crypto = require('crypto')

/**
 * @typedef {Object} SyncOAuthChallengeImpl
 * @property {crypto.KeyPairKeyObjectResult} keyPair
 * @typedef {SyncOAuthChallengeImpl} SyncOAuthChallenge
 */

/**
 * @param {SyncOAuthChallenge} challenge
 * @param {Object} [options]
 * @param {string} [options.clientId] - OAuth client ID.
 * @param {string} [options.scope] - OAuth scope.
 * @param {string} [options.tokenEndpoint] - OAuth token endpoint.
 * @param {string} [options.tokenServerUrl] - TokenServer URL.
 * @returns {Promise<import('./types').SyncCredentials>}
 */
async function complete (challenge, result, options) {
  // Actual code.
  return {
    oauthToken: {
      access_token: 'string',
      scope: 'string',
      expires_in: 1,
    },
    syncKeyBundle: {
      encryptionKey: 'string',
      hmacKey: 'string',
      kid: 'string',
    },
    token: {
      id: 'string',
      key: 'string',
    },
    tokenIssuedAt: 1,
  }
}

module.exports = { complete }