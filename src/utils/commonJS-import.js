// via https://docs.joshuatz.com/cheatsheets/js/jsdoc/

// Use `import(FILE_PATH)['EXPORTED_THING']` instead of `import(FILE_PATH).EXPORTED_THING

/**
 * @typedef {typeof import('./imports/my-js-file')['myExportedFunc']} MyFunc
 */

/**
 * Example of common js import ad type
 * @param {MyFunc} xyz
 * @returns {{total: number, adjustedTotal: number, avgWeight: number}} totals
 */
function myFunc(xyz) {
  // implementation details omitted
  return { 
    total: 2, 
    adjustedTotal: 3, 
    avgWeight: 4
  }
}