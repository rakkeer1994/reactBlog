import React from 'react'
import HomePic from './HomePic'
import { PicData } from './Data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sports from './Sports';
import Hollywood from './Hollywood'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react'
import {contextData} from '../Context'

const Home = () => {
const catchData=useContext(contextData)
const time = new Date().toLocaleString();
const [theLatestArticleLeft, setTheLatestArticleLeft] = useState([])
useEffect(()=>{
  const getArticle= async()=>{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8c0e1efd64d44fd6b2e5b05506cf1def&q=entertainment")
    console.log(response)
    setTheLatestArticleLeft(response.data.articles)
    
  }
  getArticle()
}, [])

const [theLatestArticleRight, setTheLatestArticleRight] = useState([])
useEffect(()=>{
  const getArticle= async()=>{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8c0e1efd64d44fd6b2e5b05506cf1def&q=tourism")
    console.log(response)
    setTheLatestArticleRight(response.data.articles)
    
  }
  getArticle()
}, [])
  return (
    <>
    <div className='homepageContainer'>
    <HomePic time={time}/>
    </div>
    <h1 ><NavLink className='animatLine' to='/'>Top post</NavLink> </h1>
    <div className='homePge2'>
      
        {PicData.map((picVal)=>{
          return(
            <div>
            <img  src={picVal.imgSrc}/>
            <h1>{picVal.name}</h1>
            <p>{picVal.Desc}</p>
            <span style={{color: "darkblue", fontSize:"1.2rem"}}>{picVal.topic} //  </span><span>{time}</span>
            </div>

          )
        })}
    </div>
    <h3 ><NavLink className='animatLine' to='/'>The Latest Article</NavLink> </h3>
    <div className='homePage3'>
      <div className='LeftArticle'>
        {
          theLatestArticleLeft.map((artVal)=>{
            return (
              <>
              <div style={{display:"flex", margin:"1%"}}>
              <div style={{margin:"1%"}}>
              <img  style={{width:"20vw", height:"25vh"}} src={artVal.urlToImage}/>
              </div>
             <div style={{marginLeft:"1%"}}>
             <h3>{artVal.title}</h3>
             <p>{artVal.description}</p>
             <Link to={artVal.url}>Read More</Link>
             <span style={{color: "darkblack", fontSize:"1.2rem"}}>{artVal.heading} /</span><span>{time}</span>
           </div>
           </div>
           <hr/>
           </>
            )
          })
        }
      
      </div>
      <div className='rightArticle'>
       
       { theLatestArticleRight.map((rightVal)=>{
          return(
            <>
            <div style={{display:"flex",margin:"1%"}}>
              <div><img style={{width:"15vw", height:"15vh"}} src={rightVal.urlToImage}/></div>
               <div> <h3>{rightVal.description}</h3>
                  <span style={{color:"lightBlue", fontSize:"1.2rem"}}>{rightVal.title} //</span><span>{time}</span>
                  </div>
                  
           </div>
           <hr/>
           </>
          )
       })}

       <div className='adverDiv'>
         <h1>AdverTisement</h1>
       </div>
        </div>

    </div>
     <div style={{}}>
      <h2 style={{textAlign:"center", height:"3vh"}}>Hollywood News</h2>
      <div className='sportStyle'>
     
     {catchData.data[1].map((artVal, ind)=>{
       return(
         <>
         <div>
         <h4>{artVal.title}</h4>
         <img src={artVal.image} alt="some error"/> <br></br>
         <Link to={`/hollywood/${ind+1}`}>
         full article</Link>
         {/* <p>{artVal.description}</p> */}
        </div>
         
         </>
       )
     })}
   </div>
      </div>

      <div style={{}}>
      <h2 style={{textAlign:"center", height:"3vh"}}>Technology News</h2>
      <div className='sportStyle'>
     
     {catchData.data[0].map((artVal, ind)=>{
       return(
         <>
         <div>
         <h4>{artVal.title}</h4>
         <img src={artVal.image} alt="some error"/> <br></br>
         <Link to={`/technology/${ind+1}`}>
         full article</Link>
         {/* <p>{artVal.description}</p> */}
        </div>
         
         </>
       )
     })}
   </div>
      </div>

      <div style={{}}>
      <h2 style={{textAlign:"center", height:"3vh"}}>Sports News</h2>
      <div className='sportStyle'>
     
     {catchData.data[2].map((artVal, ind)=>{
       return(
         <>
         <div>
         <h4>{artVal.title}</h4>
         <img src={artVal.image} alt="some error"/><br></br>
         <Link to={`/hollywood/${ind+1}`}>
         full article</Link>
         {/* <p>{artVal.description}</p> */}
        </div>
         
         </>
       )
     })}
   </div>
      </div>
    <Outlet />
    </>
  )
}

export default Home