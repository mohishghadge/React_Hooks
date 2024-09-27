import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [counter,setCounter] = useState(0);

    const handleDecrement=()=>{
        setCounter(counter-1)
    }
    
    const handleIncrement=()=>{
        setCounter(counter+1)
    }


// UseEffect takes two parameter callback 
// function and second is the dependency array
// Eg: Here in the below example the clg will run only once if given  with an empty array []
        // But if the dependency is given for eg: counter then on every state change it will print I ran
        // and if not array is given it will run infinite times
// useEffect(()=>{
//     console.log('I ran')
// },[])

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
        <button onClick={handleIncrement}>+</button>
        <h1>{innerWidth}</h1>

        
    </div>

  )
}

export default Effect