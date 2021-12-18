import React, { Component } from 'react'

/**
 * @typedef AdditionalType
 * @prop {string} [xyz] - XYZ prop
 * @prop {string} [abc] - ABC prop
 * @prop {string} bcd - BCD prop
 */

/**
 * @typedef Props
 * @prop {string} [text] - My button
 * @prop {string} [textColor] - the color of the text in the button
 * @prop {string} [bgColor] - the background color of the button
 * @prop {React.CSSProperties} [overrideStyles] - used to set the CSS of the button
 * @prop {() => void} [onLogin] - Login handler
 * @prop {AdditionalType} [example] - example ref
 */

/**
 * Renders a <Button /> component
 * @param {Props} props
 * @return {React.ReactElement} - React component
 */
export default function ButtonTwo(props = {}) {
  return (
    <button>{props.text || 'my button'}</button>
  )
}