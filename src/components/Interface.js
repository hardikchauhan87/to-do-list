import React, { useState } from 'react'
import "../style.css"
import Fire from '../Fire'
import { useNavigate } from 'react-router-dom'
const Interface = () => {
  const[Obj,SetObj]=useState()
  const navigate=useNavigate()
  function set(e){
    SetObj({...Obj,[e.target.name]:e.target.value})
    }
    function submit(){
      var inputbox=document.getElementById("inptbx");
      if(inputbox.value==""){
        alert("please type something")
      }
      else{
      Fire.child(`to-dol-list/task`).push(Obj,err=>{
        if(err){
          console.log("error")
        }
        else{
          alert("successfully added")
        }
      })
    }
    }
   function check(){
navigate('/check')
   }
  return (
    <div>
    <div className='bdy'>
  <div id='box'>
<h1 id='h1-box'>To-Do-List</h1> <br />
<input onChange={set} name='list' id='inptbx' className='form-control' type="text" placeholder='enter your task' /> <br />
<button onClick={submit} className='btn btn-success'>submit</button> <br />
<button onClick={check} className='btn btn-primary'>check-list</button>
  </div>
    </div>
    </div>
  )
}

export default Interface