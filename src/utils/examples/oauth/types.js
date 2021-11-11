// https://www.codejam.info/2021/10/jsdoc-typescript-inside-javascript.html

/**
 * @typedef {Object} SyncOptions
 * @property {string} [authServerUrl]
 * @property {string} [authorizationUrl]
 * @property {string} [tokenEndpoint]
 * @property {string} [tokenServerUrl]
 * @property {Object} [oauthOptions]
 *
 * @typedef {Object} OAuthToken
 * @property {string} access_token
 * @property {string} scope
 * @property {number} expires_in
 *
 * @typedef {Object} SyncToken
 * @property {string} id
 * @property {string} key
 *
 * @typedef {Object} SyncKeyBundle
 * @property {string} encryptionKey
 * @property {string} hmacKey
 * @property {string} kid
 *
 * @typedef {Object} SyncCredentials
 * @property {OAuthToken} oauthToken - The OAuth token required to authenticate to the TokenServer.
 * @property {SyncKeyBundle} syncKeyBundle - The Sync key bundle required to decrypt the collection keys.
 * @property {SyncToken} token - The token object required to call the Firefox Sync API.
 * @property {number} tokenIssuedAt - Timestamp in milliseconds of when the token was issued to preemptively refresh it.
 */

// Does nothing but required for TypeScript to import this file.
module.exports = {}