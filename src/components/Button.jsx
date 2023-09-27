import React from 'react'

const Button = ({label, onClickFunc, variant}) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClickFunc}>{label}</button>
  )
}

export default Button