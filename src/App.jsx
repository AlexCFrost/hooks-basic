import './App.css'
import React from 'react'
import { useState } from 'react'
import UseContext from './Components/UseContext'
import UseEffect from './Components/UseEffect'
import UseState from './Components/UseState'

export const ToggleTheme = React.createContext()

function App(){

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return(
    <>
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
    </>
  );
}

export default App 