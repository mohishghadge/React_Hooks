//It creates a mutable variable which will  not re-render the components
//to access a DOM element directly


import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {

const [myData,setMyData] = useState('')

{/* example 1 */}
const count = useRef(0)
console.log("count:",count.current )

useEffect(()=>{
    count.current = count.current+ 1 
})

{/* example 2*/}


const inputElem = useRef("");

const changeStyle = ()=>{
  inputElem.current.style.backgroundColor = 'green'
}


    
  return (
    <>
        {/* example 1 */}
        <input type="text"  value={myData} onChange={(e)=>setMyData(e.target.value)}/>
        <p>The number rendered is:{count.current}</p>
       

        {/* example 2*/}
        <input type="text" ref={inputElem} value={myData} onChange={(e)=>setMyData(e.target.value)}/>
        <br />
        <button onClick={changeStyle}>Submit</button>
       

    </>
  )
}

export default Ref