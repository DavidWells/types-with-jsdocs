import React, { useState, Component } from 'react'

/**
 * @typedef {Object} AppUser
 * @property {string} given_name
 * @property {string} family_name
 * @property {string} [favorite_movie]
 * @property {string} favorite_book
 * @property {Array<AppUser>} [friends]
 * @property {Record<string,any> | null} [stuff]
 */

/**
 * @typedef {Boolean} LoadingState — documentation for isLoading
 * @description Additional doc
 */
/**
 * @typedef {Function} LoadingStateSetter — documentation for setIsLoading
 */

export default function MyDivComponent() {
  // Inline def
  const [state, setState] = useState(/** @type {{name: string?, age: number?}} */({}))

  // Inline def reference to typedefs
  const [appUser, setAppUser] = useState(/** @type {AppUser | null} */(null))

  // Reference to typedefs
  /** @type {[LoadingState, LoadingStateSetter]} Loading */
  const [isLoading, setIsLoading] = React.useState(true);
  const isLive = useMyHook({ disabled: true })

  return (
    <div>
      text
    </div>
  )
}

/**
 * A hook to do something
 *
 * @param {object} params
 * @param {boolean} [params.disabled] Disable the thing
 * @returns {boolean}
 */
const useMyHook = (params) => {
  const [isUsing, setUsing] = useState(false)
  // Some logic here to invoke setUsing()
  return isUsing;
};