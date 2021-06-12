import React from 'react'

/**
 * @typedef Props
 * @prop {React.ReactNode} [children]
 * @prop {React.ReactNode} [desc]
 * @prop {React.ReactNode} [selectFlightPrompt]
 * @prop {()=>void} [onLogin]
 */

/**
 * @param {Props} props
 */
export default function Card({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}