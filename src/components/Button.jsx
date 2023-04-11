import React from 'react'
import "./styles/Button.css"

const Button = ({handLeNewquote}) => {
  return (
    <button className='button' onClick={handLeNewquote}>SEE OTHER</button>
  )
}

export default Button