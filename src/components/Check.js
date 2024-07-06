import React, { useEffect, useState } from 'react'
import "../style.css"
import Fire from '../Fire'

const Check = () => {
    const [Data,SetData]=useState()

    useEffect(function(){
        Fire.child(`to-dol-list/task`).on("value",function(snap){
            if(snap.val()==null){
                console.log("error")
            }
          else{
          SetData(snap.val()) }
        })
    },[])
    function del(key){
Fire.child(`to-dol-list/task/${key}`).remove(err=>{
    if(err){
        alert("error occured")
    }
    else{
        alert("congratulation")
    }
})
    }
    function complete(key){
        Fire.child(`to-dol-list/task/${key}`).update({status:"completed"},err=>{
            if(err){
                alert("something went wrong")
            }
            else{
                alert("completed")
            }
        })
    }
   
  return (
    <div>
        <div id='checkbx'  className='container'>
            <table className='table table-striped table-bordered table-hover table-dark'>
                <thead className='table table-striped table-bordered table-hover table-dark'>
                  <th>Sr.no</th>
                    <th>To-do-List</th>
                    <th>options</th>
                </thead>
                <tbody>
                {
            Data?(
             
                Object.keys(Data).map(function(key,index){
                    if(Data[key].status=="completed"){
                        return(
                            <tr>
                              <td>{index+1}</td>
                              <td>{Data[key].list}</td>
                             <td><button className=' btn btn-success'>completed</button>
                             <button onClick={()=>del(key)} className='btn btn-xs btn-danger'>Delete</button>
                             </td>
                       
                            </tr>
                          )
                    }
                   else{
                    return(
                        <tr>
                          <td>{index+1}</td>
                          <td>{Data[key].list}</td>
                          <td><button onClick={()=>del(key)} className='btn btn-danger'>Delete</button>
                      <button onClick={()=>complete(key)} className=' btn btn-sm btn-primary'>Complete</button></td>
                        </tr>
                      )
                   }
                })
            ):""
         }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Check