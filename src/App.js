import React, { useState } from 'react'
import './App.css'
import ComponentMaking from './Component/Practice/componentMaking'
import Child from './Component/child'
import OtherChild from './Component/OtherChild'
import { createContext } from 'react'


 export const GlobalInfo=createContext()
const App = () => {
  const[color,setColor]=useState('green')
  
  const[message,setMesaage]=useState('')
const[input,setInput]=useState({
  loginname:'',
  password:"",
})
const onInputUpdate=(e,type)=>{
   setInput((p)=>{
   return {...p,[type]:e.target.value}
   })
 }
 
 const onFormSubmit=async(e)=>{
  e.preventDefault()
  try{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
     const raw = JSON.stringify({
      "loginname": input.loginname,
      "password": input.password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
   let fetchData=await fetch("http://localhost:4041/movieBooking/api/v1/onLogin", requestOptions)
   let result=await fetchData.json()
   console.log(result)
   setMesaage('Thanku')
     
  }
  catch(e){
console.log('something went wrong')
  }
 }

console.log(message)
 console.log(input)

  return (
    <div className='container'>
    <div className='form'>
     <form onSubmit={onFormSubmit}>
       <h2>Login</h2>
        <label>UserName</label>
        <input type='text' placeholder='userName' onChange={(e)=>onInputUpdate(e,'loginname')} />
        <label>Password</label>
        <input type='text' placeholder='password' onChange={(e)=>onInputUpdate(e,'password')}/>
     </form>
     <button type='submit'>SUBMIT</button>
     {
        message && <div>{message}</div>
     }
    </div>
  
    <ComponentMaking/>
    {/* context Api  code*/}
   <GlobalInfo.Provider value={{appColor:color}} >
   <Child/>
   <OtherChild/>
   </GlobalInfo.Provider>

    </div>
  )
}

export default App