import React, { useState } from 'react'

// https://gist.github.com/hrdtbs/f7e567c0738725a16a9de7326dc11127
const btn = document.createElement("button");
/** @type {Element} */ (btn).setAttribute("disabled", "true");


/**
 * First name & last name
 * @typedef {{firstName: string, lastName: string}} CoolType
 */

const qwerty = /** @type {CoolType} */({ firstName: 'y', lastName: 'x'});

// ───────────────────────
// https://twitter.com/karlhorky/status/1409074665209925632
// Inline useState typecast

/**
 * User
 * @typedef {{name: string, lastName?: string}} ExampleUser
 */

function C() {
  const [u, setU] = useState(/** @type {ExampleUser | null} */ (null)) 
  setU({ name: '' })
}

// https://github.com/JacobParis/cloudfool/pull/2
// broken
// export default function Component(props) {
//   /** @type [ExampleUser, React.Dispatch<ExampleUser>] */
//   const [user, setUser] = useState(null)
//   console.log('user', user)
//   setUser({ name: 'hi' })
// }