import React, { useContext } from 'react'
import SuperChild from './SuperChild'
import { GlobalInfo } from '../App'

const Child = () => {
    const {appColor}=useContext(GlobalInfo)
    console.log({'color':appColor})
   

  return (
    <div>
        <h1 style={{color:appColor}}>Child</h1>
        <SuperChild/>
    </div>
  )
}

export default Child