import React from 'react'

const Button = ({type, text, onClick}) => {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${type} d-grid gap-2 col-4 mx-auto`}>{text}</button>
  )
}

export default Button