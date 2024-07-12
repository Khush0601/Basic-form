import React, { useMemo, useState } from 'react'
// practicing useMemo
const Home = () => {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(10)
    const onIncrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const onIncrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }

   const isEven=useMemo(()=>{
     console.log('isEven Called')
     return counterOne*2
   },[counterOne])
  return (
    <div>
        <h1>Learning useMemo</h1>
     <button onClick={onIncrementOne}>CounterOne</button>
     <h1>{counterOne}</h1>
     <h2>{isEven}</h2>
     <button onClick={onIncrementTwo}>CounterTwo</button>
     <h1>{counterTwo}</h1>
    </div>
  )
}

export default Home