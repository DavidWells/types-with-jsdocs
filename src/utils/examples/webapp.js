// https://gist.github.com/Meshida/22096d72ccfbc03998c7f5f5caf02f24

/**
 * @typedef {Object} PostData
 * @prop {Object} postData
 *  An object of data for the received POST requests.
 * @prop {number} postData.length
 *  The same as contentLength of ReqParams
 * @prop {string} postData.type
 *  The MIME type of the POST body
 * @prop {string} postData.contents
 *  The content text of the POST body
 * @prop {string} postData.name
 *  Always the value "postData"
 */

/**
 * @typedef {Object} ReqParams
 * @prop {string} queryString
 *  The value of the query string portion of the URL, or null if no query string is specified
 * @prop {Object.<string, string>} parameter
 *  An object of key/value pairs that correspond to the request parameters. Only the first value is returned for parameters that have multiple values.
 * @prop {Object.<string, Array.<string>>} parameters
 *  An object of key/value pairs that correspond to the request parameters. All the values of each key are in an array.
 * @prop {number} contentLength
 *  The length of the request body for POST requests, or -1 for GET requests.
 */

/**
 * @param {ReqParams} e An data of the GET request
 */
function doGet(e) {
}

/**
 * @param {ReqParams & PostData} e An data of the POST request
 */
function doPost(e) {
}