// https://stackoverflow.com/questions/66553490/how-do-i-annotate-react-forwardref-with-jsdoc-comments-so-that-intellisense-can
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} ButtonPropTypes
 * @property {string} text
 * @property {string} icon
 */

/**
 * @type React.FC<ButtonPropTypes>
 */
const Button = forwardRef(({ text, icon }, ref) => (
  <button ref={ref}>{text}{icon}</button>
))

const ButtonPropTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

Button.propTypes = ButtonPropTypes