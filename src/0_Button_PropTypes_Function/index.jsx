import React from 'react'
import PropTypes from 'prop-types'

const propTypes =  {
  /** Description of prop "children". */
  children: PropTypes.element,
  /** Description of prop "foo". */
  foo: PropTypes.number,
  /** Description of prop "baz". */
  baz: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ])
}

const defaultProps = {
  foo: 42
}

export default function ButtonWithPropTypes({ children }) {
  return (
    <button>
      {children}
    </button>
  )
}

ButtonWithPropTypes.propTypes = propTypes
ButtonWithPropTypes.defaultProps = defaultProps