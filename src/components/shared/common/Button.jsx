import React from 'react'

const Button = ({className, name, onclick}) => {
  return (
    <>
      <button onClick={onclick} className={className}>{name}</button>
    </>
  )
}

export default Button
