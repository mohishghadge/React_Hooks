import React, { useMemo, useState } from 'react'

const Memo = () => {
  const [myNum,setMyNum] = useState(0);
  const [show,setShow] = useState(false);

//Problem Statement:
// Here the problem statement is that when the first[Counter button is clicked   i.e the number is getting increased by one with some delay it in but when 
//  the second btn is clicked while the text changes inside the btn it is also getting delayed ]
  
// As we  are using useState what it  does is whenever the state is updated it will re-render and whenever it is rendered it will render the whole function and when the second btn is clicked 
// it will first  run this line {  const checkData =  counterNumber(myNum) } according to hoisting and go to this  counterNumber() and whenever the loop gets completed then it will change
//  the text inside the btn.

//So to over come this problem we use the hook useMemo();
//What it will do is, it will only run the function  checkData when the  myNum  value is getting updated else it will not be runned and the value will be only be update on clicking on the counter button 
// only and not on the second button

  const getValue = ()=>{
    return setMyNum(myNum + 1);
  }

const  counterNumber = (num)=>{
  console.log(`counterNumber ~ num`,num);
  for(let i = 0;i <= 1000000000;i++){}
  return num;
}

 
const checkData = useMemo(()=>{
  return  counterNumber(myNum)
},[myNum])

// const checkData =  counterNumber(myNum)


  return (
    <div>
        <button onClick={getValue}>Counter</button>
          <h1>{checkData}</h1>
          <button onClick={()=>setShow(!show)}>
            {show ? "You Clicked me " : "clicked me plzz!!"}
          </button>
    </div>
  )
}

export default Memo