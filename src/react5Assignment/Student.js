
import { Link } from 'react-router-dom'
import Table from './Table'


import React, { Component } from 'react'

 class Student extends Component {
  render(props) {
   
    return (
      <>
      <div className='container'>
      <h1>Students Details</h1> 
      <button className='addlist'>Add More</button>
      </div>
       <Table />
     
     </>
    )
  }
}

export default Student
