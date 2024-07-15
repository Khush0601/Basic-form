import React, { memo, useState } from 'react'
// practicing memo
const Counter = ({count,setCount}) => {
  
  return (
    <div>
      <h1>learning React memo</h1>
        <button onClick={()=>setCount(count+1)}>INC</button>
        {count}
    </div>
  )
}

export default memo(Counter)