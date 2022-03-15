import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Route, NavLink} from 'react-router-dom'
import axios from 'axios'
const Sports = () => {

  const {id} = useParams()
console.log(id)
console.log("first")

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    const getArticle= async()=>{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8c0e1efd64d44fd6b2e5b05506cf1def&q=health")
      console.log(response)
      setArticles(response.data.articles)
      
    }
    getArticle()
  }, [])
  
  return (
    <>
    <h3 style={{textAlign:"center", height:"5vh"}}><NavLink className='animatLine' to='/'>Sports News</NavLink> </h3>
   
    <div className='sportStyle'>
      
      {articles.map((artVal, ind)=>{
        return(
          
          <div>
          <img src={artVal.urlToImage} alt="some error"/>
          <h4>{artVal.title}</h4>
          <p>{artVal.description}</p>
          {/* <Route path='/sports'> */}
          <Link to={`/sports/${ind+1}`}> Read full article</Link>
          {/* <Link to={artVal.url}> Read full article</Link> */}
          {/* </Route> */}
         </div>
          
        )
      })}
    </div>
    </>
  )
}

export default Sports

