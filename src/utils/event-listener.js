

/**
 * Element selector
 * @typedef {(string|Node|NodeList|EventTarget|null)} Selector
 */

/**
 * Event to listen to 
 * @typedef {(string|string[])} EventType
 */

/**
 * @typedef {Object} Options
 * @prop {boolean} [once]
 */

/**
 * Cleanup event listener
 * @callback RemoveListener
 * @returns {AttachListener}
 */

/**
 * ReAttach event listener
 * @callback AttachListener
 * @returns {RemoveListener}
 */

/**
 * Add an event listener
 * @callback AddEventListener
 * @param {Selector}  elements  - Element(s) to attach event(s) to.
 * @param {EventType} eventType - Event(s) to listen to 
 * @param {Function}  handler - Function to fire
 * @param {Options}   [options] - Event listener options
 * @returns {RemoveListener}
 */

/** @type {AddEventListener} */
function add(elements, eventType, handler, options = {}) {
  /** @type RemoveListener */
  const remove = () => {
    // clean up
    return () => {
      // reattach
      /** @type AttachListener */
      return add(elements, eventType, handler, options)
    }
  }
  return remove
}

const x = add('button', 'click', () => {
  console.log('yay')
})