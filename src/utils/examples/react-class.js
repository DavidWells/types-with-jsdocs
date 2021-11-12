// https://stackoverflow.com/questions/43768915/how-to-use-typescript-jsdoc-annotations-for-react-proptypes
import React, { Component } from "react";

/**
 * @typedef {object} Props
 * @prop {string} className
 * @prop {number} numberProp
 *
 * @extends {Component<Props>}
 */
export default class SomeComponent extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.numberProp}
      </div>
    );
  }
}