import { useContext, useState } from "react";
import { ToggleTheme } from "../App";
import { useEffect} from 'react'

function UseContext(){
    const[text,setText] = useState(false)
    const[likes,setLikes] = useState(0)
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem",
    width:"800px"
  }

  useEffect (() => {
    alert(`Content button clicked`)
    console.log("helo")
},[text])


  return(
    <div style={themeStyle}>
        {text &&
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo laboriosam consequatur facere. Voluptatem nesciunt perferendis reprehenderit
             quos quae harum eius minima maiores? Ipsum, similique laudantium!</p>
}<h1>{likes}</h1>
             <button onClick={()=>setText(!text)}>Content</button>
             <button onClick={()=>setLikes((prev)=>prev+1)} >Like</button>

    </div>

  )
}

export default UseContext;