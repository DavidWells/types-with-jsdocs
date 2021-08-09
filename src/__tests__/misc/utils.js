// https://github.com/mantinedev/mantine/blob/master/src/mantine-tests/src/it-supports-classname.tsx
import React from 'react'
import { render } from '@testing-library/react'

/**
 * @callback TestUtil
 * @param {React.ElementType} Component
 * @param {Record<string, any>} requiredProps
 */

/**
 * 
 * @param {React.ElementType} Component
 * @param {Record<string, any>} requiredProps
 */
export function itSupportsClassName(Component, requiredProps = {}) {
  const { container } = render(<Component {...requiredProps} className="test-class-name" />)
  return container.querySelector('.test-class-name')
}


/** @type {TestUtil} */
export function itRendersChildren(Component, requiredProps) {
  const { container } = render(
    <Component {...requiredProps}>
      <span className="test-children">test-children</span>
    </Component>
  )
  return container.querySelector('.test-children')
}