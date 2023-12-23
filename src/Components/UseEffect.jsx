import { useEffect, useState } from 'react'

function UseEffect() {
const [age , setAge]=useState(0)
const [sib , setsibling]=useState(0)


useEffect(() => {
    alert(` age is ${age}`)
},[sib,age])

  return (
    <div>
    <h3>My Current Age is {age}</h3>
    <h4>My siblings {sib}</h4>

    <button onClick={()=>setAge(prev=>prev+1)}>age</button>
    <button onClick={()=>setsibling(prev=>prev+1)}>sib</button>
    </div>
  )
}

export default UseEffect