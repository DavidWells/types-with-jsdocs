import React, { Component } from 'react'

/**
 * @typedef Props
 * @prop {string} [textColor]
 * @prop {React.ReactNode} [desc]
 */

/**
 * @typedef State
 * @prop {boolean} isDrawerOpen
 */

/**
 * @extends Component<Props, State>
 */
export default class ButtonClass extends Component {
  /** @type {State} */
  state = {
    isDrawerOpen: false,
  }

  constructor(props) {
    super(props)
  }

  render() {
    // This is an error:
    // console.log(this.state.lol)
    return (
      <React.Fragment>
        Button class {this.state.isDrawerOpen}
      </React.Fragment>
    )
  }
}