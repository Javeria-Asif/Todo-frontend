import React from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

export default function Create() {
  const [task,setTask]=useState()
  const handleAdd=()=>{
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => {
      window.location.reload()
    })
    .catch(err=> console.log(err))
  }
  return (

    <div class="create_form">
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} ></input>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}
