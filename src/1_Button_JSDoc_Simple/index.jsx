import React from 'react'

/**
* Renders a <Button /> component
* @param  {object}  props - Button props
* @param  {string}  [props.text] - My button
* @param  {boolean} [props.isActive] - is button active
* @param  {string}  [props.className] - CSS class name
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



// https://www.javascriptjanuary.com/blog/autocomplete-in-react-using-jsdoc

/**
* Renders a <Button /> component
* @param  {object} props
* @param  {string} props.textColor - the color of the text in the button
* @param  {string} props.bgColor - the background color of the button
* @param  {React.ReactNode} [props.children] - component children;
* @param  {React.CSSProperties} props.overrideStyles - used to set the CSS of the button
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