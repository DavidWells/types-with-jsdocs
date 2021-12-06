// @ts-nocheck

// https://github.com/voxpelli/types-in-js/discussions/17

/** @template [T=undefined] */
class ErrorWithCause extends Error {
  /**
   * @param {string} message
   * @param {{ cause?: T }} [options]
   */
  constructor (message, { cause } = {}) {
    if (cause) {
      /** @type {T} */
      this.cause = cause;
    }
    // ...
  }
}


// ───────────────────────
// https://github.com/microsoft/TypeScript/pull/45483

/**
 * @template {string} [T="hello"]
 * @typedef {T} Foo
 */