import React, { useEffect, useState } from 'react'

const State = () => {

const   [counter,setCounter] = useState(0);

const handleDecrement=()=>{
    setCounter(counter-1)
}

const handleIncrement=()=>{
    setCounter(counter+1)
}



  return (
    <div style={{display:'flex', gap:30,alignItems:"center"}}>
        <button onClick={handleDecrement}>-</button>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default State