 import React, { useState, useEffect } from 'react'
 import { Link, NavLink } from 'react-router-dom'
 import data from './db.json'
 import AddStudent from './AddStudent'
 import axios from 'axios'

 const Table = () => {

const [students, setStudents] = useState(data)
useEffect(()=>{

})
const [status, setStatus] = useState()
const [student, setStudent] = useState({
    name:"",
    course:"",
    batch:"",
    email:""
  })
 const handleAddformChange = (event) => {
     event.preventDefault()
     setStudent({...student,
        [event.target.name]:event.target.value
      })
 }

 const handleFormSubmit = (event)=>{
            event.preventDefault()
            data.push(student)
            setStatus(true)
               }
    if(status){
        return <Table/>
    }
   return (
     <div>
         
         <table>
             <thead>
                 <tr>
                     <th>Name</th>
                     <th>Course</th>
                     <th>Batch</th>
                     <th>Email</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody>
                {
                   students.map( (stu, ind)=>{
                   return(
                    <tr key={ind}>
                    <td>{stu.name}</td>
                    <td>{stu.course}</td>
                    <td>{stu.batch}</td>
                    <td>{stu.email}</td>
                    <td><Link to={`/editablerow/${ind}`}>Edit</Link></td>
                </tr>) }) 
                }
             </tbody>
         </table>
         
  
         <div>
        <h2>Add Students</h2>
        <form onSubmit={handleFormSubmit}>
            <input type='text' name='name' placeholder='enter name' onChange={handleAddformChange}/>
            <input type='text' name='course' placeholder='enter course' onChange={handleAddformChange}/>
            <input type='text' name='batch' placeholder='enter batch' onChange={handleAddformChange}/>
            <input type='text' name='email' placeholder='enter email' onChange={handleAddformChange}/>
            <button type='submit'>Add</button>
        </form>
    </div>
     
 
     </div>
   )
 }
 
 export default Table