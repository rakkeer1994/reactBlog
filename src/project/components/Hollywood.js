import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import {contextData} from '../Context'
const Hollywood = () => {
  const catchData=useContext(contextData)
  const {id} = useParams()
console.log(id)
console.log("first")

  const [articles, setArticles] = useState([])
  // useEffect(()=>{
  //   const getArticle= async()=>{
  //     const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8c0e1efd64d44fd6b2e5b05506cf1def&q=business")
  //     console.log(response)
  //     setArticles(response.data.articles)
      
  //   }
  //   getArticle()
  // }, [])
  
  return (
    <>
     
     <div style={{position:"absolute", top:"18%"}}>
      <h2 style={{textAlign:"center", height:"3vh"}}>Hollywood News</h2>
      <div className='sportStyleCommon'>
     
     {catchData.data[1].map((artVal, ind)=>{
       return(
         
         <div>
         <h4>{artVal.title}</h4>
         <img src={artVal.image} alt="some error"/> <br></br>
         <Link to={`/hollywood/${ind+1}`}>
         full article</Link>
         {/* <p>{artVal.description}</p> */}
        </div>
       )})
     }     
     </div>  
     </div>  
 
    </>
  )
}


export default Hollywood
