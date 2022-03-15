import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
const Hollywood = () => {

  const {id} = useParams()
console.log(id)
console.log("first")

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    const getArticle= async()=>{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8c0e1efd64d44fd6b2e5b05506cf1def&q=business")
      console.log(response)
      setArticles(response.data.articles)
      
    }
    getArticle()
  }, [])
  
  return (
    <>
     <h2 style={{textAlign:"center", height:"5vh"}}>Hollywood News</h2>
     
    <div className='sportStyle'>
     
      {articles.map((artVal, ind)=>{
        return(
          <>
          <div>
            {/* <Link to={artVal.url}>{artVal.url}</Link> */}
          <img src={artVal.urlToImage} alt="some error"/>
          <h4>{artVal.title}</h4>
          <Link to={`/hollywood/${ind+1}`}>
          <p>{artVal.description}</p></Link>
         </div>
          {/* <Route path={artVal.url} element={<Hollywood/>}/> */}
          </>
        )
      })}
    </div>
    </>
  )
}

export default Hollywood

