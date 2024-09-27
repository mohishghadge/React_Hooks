import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {
    const [counter,setCounter] = useState(0);


// useMemo(()=>{

// },[])

const  [show,setShow]= useState(false)

const handleChange = useMemo(()=>{
    for(let i = 0;i < 10000000;i++){}

    return counter *2
},[counter])


// const handleChange =()=>{
//     for(let i = 0;i < 10000000;i++){}

//     return counter *2
// }



    const handleDecrement=()=>{
        setCounter(counter-1)
    }
    
    const handleIncrement=()=>{
        setCounter(counter+1)
    }
    const [innerWidth,setInnerWidth] = useState(window.innerWidth)


    useEffect(()=>{
       window.addEventListener("resize",()=>{
        setInnerWidth(window.innerWidth)
       })
    },[innerWidth])
    

    useEffect(()=>{
            if(counter === 10  || counter === -10){
                setCounter(0)
            }
    },[counter])

  return (
  
        <div style={{display:'flex', gap:30,alignItems:"center"}}>
        <button onClick={handleDecrement}>-</button>
        <h1>{counter}</h1>
       {show &&<h2>abcd</h2>}
        <button onClick={handleIncrement}>+</button>
        <h1>{innerWidth}</h1>
        <p>
            {handleChange}
        </p>
        <button onClick={()=>{setShow((prev)=>!prev)}}></button>
    </div>
  )
}

export default Memo