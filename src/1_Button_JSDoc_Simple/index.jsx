import React from 'react'

/**
* Renders a <Button /> component
* @param  {Object}  props - Button props
* @param  {String}  [props.text] - My button
* @param  {Boolean} [props.isActive] - is button active
* @param  {String}  [props.className] - CSS class name
* @param  {React.ReactNode} [props.children] - component children;
* @param  {React.CSSProperties} [props.style] - used to set the CSS of the button
* @return {React.ReactElement} - React component
* @example
  <Button className='cool'>
    Words
  </Button>
*/
export default function Button(props = {}) {
  return (
    <button style={props.style}>
      {props.text}
      {props.children || 'my button'}
    </button>
  )
}

/* https://www.javascriptjanuary.com/blog/autocomplete-in-react-using-jsdoc */

/**
* Renders a <ButtonTwo /> component
* @param  {Object} props
* @param  {String} props.textColor - the color of the text in the button
* @param  {String} props.bgColor - the background color of the button
* @param  {React.ReactNode} [props.children] - component children;
* @param  {React.CSSProperties} props.overrideStyles - used to set the CSS of the button
* @return {React.ReactElement} - React component
*/
export const ButtonTwo = ({ children, textColor, bgColor, overrideStyles = {} }) => (
  <button
    style={{
      color: textColor,
      backgroundColor: bgColor,
      ...overrideStyles
    }}
  >
    {children}
  </button>
)


/**
* Renders a <ButtonThree /> component
* @param  {Object} buttonProps
* @param  {String} buttonProps.textColor - the color of the text in the button
* @param  {String} buttonProps.bgColor - the background color of the button
* @param  {React.ReactNode} [buttonProps.children] - component children;
* @param  {React.CSSProperties} buttonProps.overrideStyles - used to set the CSS of the button
* @return {React.ReactElement} - React component
*/
export function ButtonThree (buttonProps) {
  const { children, textColor, bgColor, overrideStyles = {} } = buttonProps
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
        ...overrideStyles
      }}
    >
      {children}
    </button>
  )
}

/**
 * Foobar function
 * @param {number} a - does thing
 * @param {number} b - xyz
 * @returns 
 */
export function fooBar(a, b) {
  return a + b
}