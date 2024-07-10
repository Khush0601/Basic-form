import React, { useContext } from 'react'
import { GlobalInfo } from '../App'

const OtherChild = () => {
    const {appColor}=useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appColor}}>{appColor}</h1>
    </div>
  )
}

export default OtherChild