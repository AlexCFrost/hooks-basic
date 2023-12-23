import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count, setCount] =useState({age:0,sibling:0})

const handleClick=(key)=>{
setCount({...count, [key]:count[key]+1})
console.log(count)
}

  return (
    <div>
      <h1>current age is {count.age}</h1>
    <h1>My sibling {count.sibling}</h1>
    <button onClick = {()=>handleClick("age")}>Get Older by 2</button>
    <button onClick = {()=>handleClick("sibling")}>Get more sibling</button>
    </div>
  )
}

export default UseState