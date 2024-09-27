import React, { useContext } from 'react'
import Component1 from './component1'
import { counterContext } from '../../context/context'


const Button = () => {
  const value = useContext(counterContext)

  return (
    <div>
        <button>
              <span> <Component1/> </span>
           I am a button</button>
    </div>
  )
}

export default Button


