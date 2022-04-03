import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
const About = () => {
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
    <div>About
    
    </div>
  )
}

export default About