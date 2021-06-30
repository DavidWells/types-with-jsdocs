import React, { Component } from 'react'

/**
 * Renders a <ButtonImport /> component with imported types
 * @param { import("./tiny").TinyProps } props
 * @return {React.ReactElement} - React component
 */
export default function ButtonImport(props) {
  return (
    <button>
      {props.message || 'my button'}
    </button>
  )
}