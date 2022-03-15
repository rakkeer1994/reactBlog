

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useState} from 'react'
import data from '../db.json'
import { useHistory } from "react-router-dom";
import Table from '../Table';

const EditableRow = () => {
  const {id} = useParams()
  const [status,setStatus] = useState()
  const history = useHistory()
  console.log(id)
  const [student, setStudent] = useState({
    name:"",
    course:"",
    batch:"",
    email:""
  })
  console.log(student.name)
  console.log(student.batch)
  const handleAddformChange=(e)=>{
    setStudent({...student,
      [e.target.name]:e.target.value
    })
  }
  console.log(student)
  const handleFormSubmit=(e)=>{
    e.preventDefault()
    data.push(student)
    console.log(data)
    // setStatus(true)
  }
 const handlBack = ()=>{
   console.log("back")
   history.push("/student")
   
 }
  return (
    <>
     <h2>Edit Students</h2>
        <form onSubmit={handleFormSubmit}>
            <input type='text' name='name' value={student.name} placeholder='enter name' onChange={handleAddformChange}/>
            <input type='text' name='course' value={student.course} placeholder='enter course' onChange={handleAddformChange}/>
            <input type='text' name='batch' value={student.batch} placeholder='enter batch' onChange={handleAddformChange}/>
            <input type='text' name='email' value={student.email}placeholder='enter email' onChange={handleAddformChange}/>
            <button type='submit'>Add</button>
             
        </form>
        <button onClick={handlBack}>Back to Student</button>
    </>
  )
}

export default EditableRow