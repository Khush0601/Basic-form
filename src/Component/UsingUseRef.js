import React, { useRef } from 'react'

const UsingUseRef = () => {
    let inputRef=useRef()
    const handleInput=()=>{
     inputRef.current.value='1000'
     inputRef.current.style.color='red'
     inputRef.current.focus()
   
    
     
    }
  return (
    <div>
        <h1>Learning useRef</h1>
        <input type='text' ref={inputRef}/>
        <button onClick={handleInput}>Handle input</button>
    </div>
  )
}

export default UsingUseRef