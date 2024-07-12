import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

const Parent = () => {
    const [count,setCount]=useState(0)
  
  return (
    <div>
        <h1>Learning React.Memo</h1>
        <ChildMemo/>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Parent