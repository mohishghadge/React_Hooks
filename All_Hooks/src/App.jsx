import React, { useState } from 'react'
import State from './components/State'
import Effect from './components/Effect'
import Memo from './components/Memo'
import Callback from './components/Callback'
import Ref from './components/Ref'
import Navbar from './components/ContextAPI/Navbar'
import {counterContext} from './context/context'

function App() {

const [counter,setCounter] = useState(0)

const increment = ()=>{
  setCounter(counter + 1)
}

  return (
    <>

      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <Ref/> */}

<counterContext.Provider value = {{counter,setCounter}}>
      <Navbar/>
      <div>{counter}</div>
      <button onClick={increment}>+</button>

</counterContext.Provider>
  
    </>
  )
}

export default App
