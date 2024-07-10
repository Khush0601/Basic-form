import React, { useState } from 'react'

const Button = () => {
  const [count,setCount]=useState(0)
  const onCountClick=()=>{
   setCount(count+1)
  }
  console.log(count)
  return (
   <div>
  <h1 onMouseOver={onCountClick}>{count}</h1>
  
  
   </div>
  )
}

export default Button