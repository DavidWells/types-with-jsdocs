

/**
 * Element selector
 * @typedef {(string|Node|NodeList|EventTarget|null)} Selector
 */

/**
 * Event to listen to 
 * @typedef {(string|string[])} EventType
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
 * @param {Function}  [handler] - Function to fire
 * @param {Object}    [options] - Event listener options
 * @param {Boolean}   [options.once] - Trigger handler just once
 * @returns {RemoveListener}
 */

/** @type {AddEventListener} */
function add(elements, eventType, handler, options) {
  /** @type RemoveListener */ 
  const remove = () => {
    /** @type AttachListener */ 
    return () => {}
  }
  return remove
}
