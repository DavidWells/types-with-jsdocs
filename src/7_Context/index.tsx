import React, { Context } from 'react'

/**
 * @typedef TMyGeneralContext
 * @property {object} competitionState
 * @property {'finished' | 'inprogress'} status
 * @property {Array} notificationActionsts
 */

// Import style

/** @type {import('react').Context<TMyGeneralContext>} */
export const MyThemeContext = React.createContext({
    competitionState: {},
    notificationActionsts: [],
    status: 'finished'
});


// Imported type style

/** @type {Context<TMyGeneralContext>} */
export const MyThemeContextTwo = React.createContext({
    competitionState: {},
    notificationActionsts: [],
    status: 'finished'
});
