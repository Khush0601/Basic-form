import React, { useMemo, useState } from 'react'
// practicising useMemo
const HomeUsingMemo = () => {
    const [add,setAdd]=useState(0)
    const [subtract,setSubtract]=useState(100)

    const isodd=useMemo(()=>{
        console.log('isOdd called')
        let i=0;
        while(i<2000000000)i++;
        return add%2===0
    },[add])
  return (
    <div>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <h1>{add}</h1>
      <h2>{isodd}</h2>
        <button onClick={()=>setSubtract(subtract-1)}>Subtract</button>
      <h1>{subtract}</h1>
    </div>
  )
}

export default HomeUsingMemo