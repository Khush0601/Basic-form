import React, { useContext } from 'react'
import { GlobalInfo } from '../App'

const SuperChild = () => {
    const{appColor}=useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appColor}}>SuperChild</h1>
     
    </div>
  )
}

export default SuperChild