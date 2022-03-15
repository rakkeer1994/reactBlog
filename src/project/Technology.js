import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Technology = () => {

  const {id} = useParams()

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    const getArticle= async()=>{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8c0e1efd64d44fd6b2e5b05506cf1def&q=technology")
      console.log(response)
      setArticles(response.data.articles)
      
    }
    getArticle()
  }, [])
  
  return (
    <>
    
    <h2 style={{textAlign:"center", height:"5vh"}}>Technology News</h2>
    <div className='sportStyle'>
      
      {articles.map((artVal, ind)=>{
        return(
          
          <div>
          <img src={artVal.urlToImage} alt="some error"/>
          <h4>{artVal.title}</h4>
          <Link to={`/technology/${ind}`}>
          <p>{artVal.description}</p></Link>
         </div>
          
        )
      })}
    </div>
    </>
  )
}

export default Technology