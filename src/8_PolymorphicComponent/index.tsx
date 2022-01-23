import React from 'react'
import classNames from 'clsx'

// The `Props` interface becomes a simple interface of the main props
interface Props {
  children: React.ReactNode
  color?: string
  font?: 'thin' | 'regular' | 'heavy'
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
}

// `TextProps` now uses `PolymorphicComponentProps` to add the `as` prop
// and inherit its prop
type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Props
>

export const Text = <C extends React.ElementType = 'span'>({
  as,
  children,
  font = 'regular',
  size = '4',
  color = 'gray-40',
  ...other
}: TextProps<C>) => {
  const classes = classNames({ font, size, color })
  const Component = as || 'span'

  return (
    <Component {...other} className={classes}>
      {children}
    </Component>
  )
}

/**
 * Usage example
 */
export const LOL = () => <Text as='button'>xyz</Text>