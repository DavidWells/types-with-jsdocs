import React from 'react'

/**
 * Renders a <ButtonReactTypes /> component with useful react types
 * @param { import("./usefulTypes").AppProps } props
 * @return {React.ReactElement} - React component
 */
export default function ButtonReactTypes(props) {
  return (
    <button>
      {props.children1 || 'my button'}
    </button>
  )
}