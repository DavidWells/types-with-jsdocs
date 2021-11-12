// https://whistlr.info/2021/check-js-with-ts/

/** @type {number[]} */
const x2 = [];  // otherwise TS thinks this is 'any[]'

/**
 * @param {Element} bar
 * @param {?Element} barOrNull
 * @return {Promise<void>}
 */
async function fooMethod(bar, barOrNull) {
  // do something with bar/barOrNull
}

/** @type {(arg: number) => string} */
const fn = (arg) => {
  /* ... */
  return 'done';
};

// this is a _cast_, not a declaration: you need to wrap in parens ()
const nowIsNumberType = /** @type {number} */ (window['someExternalAny']);