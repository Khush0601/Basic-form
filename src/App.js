import './App.css'
import React, {useState} from 'react'
const App=()=>{
  const form={
    Name:"",
    Email:"",
    Subject:"",
    Message:"",
  }
  const [details,setDetails]=useState(form);
  const updateForm=(e,type)=>{
    setDetails({...details,[type]:e.target.value})
  }
  console.log(details)
  return(
    <div className='app-container'>
      <div className="header">
         Feedback Form
       
      </div>
      <div className="middle">

        <div className="form">
        <label>Name:</label>
        <input type="text" placeholder="Enter Name" onChange={(e)=>updateForm(e,'Name')}/>
        <label>Email:</label>
        <input type="text" placeholder="Enter email"  onChange={(e)=>updateForm(e,'Email')}/>
        <label>Subject:</label>
        <input type="text" placeholder="Enter subject"  onChange={(e)=>updateForm(e,'Subject')}/>
        <label>Message:</label>
        <input type="text" placeholder="Enter message"  onChange={(e)=>updateForm(e,'Message')}/>
        </div>
        <button>Submit</button>
      </div>
    </div>
  )
}
export default App