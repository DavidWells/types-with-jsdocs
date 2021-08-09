import React from 'react'
import PropTypes from 'prop-types'

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class ButtonClassWithPropTypes extends React.Component {
  static propTypes = {
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
  static defaultProps = {
    foo: 42
  }

  render() {
    const { children, className } = this.props
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}