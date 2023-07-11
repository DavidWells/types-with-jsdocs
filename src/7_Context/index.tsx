import React, { Context } from 'react'

/**
 * React context example
 * @typedef FooBar
 * @property {object} competitionState
 * @property {'finished' | 'inprogress'} status
 * @property {Array<number>} notificationActions
 */

// Import style

/** @type {import('react').Context<FooBar>} */
export const MyThemeContext = React.createContext({
  competitionState: {},
  notificationActions: [],
  status: 'finished'
});


// Imported type style

/** @type {Context<FooBar>} */
export const MyThemeContextTwo = React.createContext({
  competitionState: {},
  notificationActions: [],
  status: 'finished'
});
