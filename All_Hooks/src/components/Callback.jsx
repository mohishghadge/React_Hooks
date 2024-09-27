import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Callback = () => {

  const [count,setCount] = useState(0)
  const [todos,setTodos] = useState([])

  const increment = ()=>{
    setCount(count+1)
  }

  
  const addTodo = useCallback(()=>{
    setTodos((prev)=>[...prev,`New Entry`])
  },[todos])


  // const addTodo = ()=>{
  //  }

    
  // const addTodo = ()=>{
  //   setTodos((prev)=>
  //   [...prev,`New Entry`]
  //   )}


  return (
    <>
    <Todos todos = {todos} addTodo ={addTodo} /> 
    <hr />
    <div style={{display:'flex'}}>
      Count : {count}
      <button style ={{marginLeft:"10px"}} onClick={increment}>+</button>
    </div>
    
    </>


  )
}

export default Callback