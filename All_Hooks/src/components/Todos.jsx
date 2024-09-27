import {memo} from 'react'

const Todos = ({todos,addTodo}) => {
console.log("rendered")

  return (
    <>
    <h2>My Todos</h2>
    {todos.map((todo,index)=>{
        return <p key={index}>{todo + index}</p>
    })}

    <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(Todos)


// Here this memo is not the memoization wala memo 
// this memo is about the Higher Oeder Component wala memo