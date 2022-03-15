// import React, { useState } from 'react'
// import {nanoid} from 'nanoid'
// const AddStudent = () => {

//  const [addformData, setAddformData] = useState({name:"",course:"",batch:"",email:""})
//  const handleAddformChange = (event) =>{
//      event.preventDefault();
//      const feildName = event.target.getAttribut('name')
//      const feildValue = event.target.value
//      const newFormData = {...addformData}
//      newFormData[feildName]=feildValue
//      setAddformData(newFormData)
//  }

//  const handleFormSubmit = (event)=>{
//                event.preventDefault()
//                  const newreciDetails = {
//                   id:nanoid(),
//                   name:addformData.name,
//                   course:addformData.course,
//                   batch:addformData.batch,
//                   email:addformData.email
//               }
//               const storreciDetails = [...reciDetails, newreciDetails]         
//                setDetails(storreciDetails)
//                }
     
//  console.log(addformData)
//   return (
//     <div>
//         <h2>Add Students</h2>
//         <form>
//             <input type='text' name='name' placeholder='enter name' onChange={handleAddformChange}/>
//             <input type='text' name='course' placeholder='enter course' onChange={handleAddformChange}/>
//             <input type='text' name='batch' placeholder='enter batch' onChange={handleAddformChange}/>
//             <input type='text' name='email' placeholder='enter email' onChange={handleAddformChange}/>
//             <button type='submit'>Add</button>
//         </form>
//     </div>
//   )
// }

// export default AddStudent