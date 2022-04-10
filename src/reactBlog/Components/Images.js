import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TourContext } from './TourContext'
// import "./index.css";

const Images = () => {
    const{value1,value2,value3}=useContext(TourContext)
    const[Tourist]=value1;
    const[Fitness]=value2;
    const[Technology]=value3;
    console.log(Tourist[1])

    
  return (
     <>
    <div className="atricle-components" >
       <div className='article-leftcomponent' >
     {   // eslint-disable-next-line
      Tourist.map(  (article, index) => {
      if(index>=Tourist.length-1) {
         return(
            
      <Link to={`/Tourism/${article.id}`} className='Home-css'>
      <div key={index} className="back-image"  style={   {backgroundImage: `url(${article.image})`,  backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
      width:"800px",height:"500px" }  }><div className=""><span><h4>{article.name}</h4></span><span>{article.date}</span>
     </div>
     
     </div>
     
     </Link>
      
        
      
        )
     }
     }
      )
  }
  </div>
 
     <div article-rightcomponent>
       <div >
        <div>
            {// eslint-disable-next-line
      Fitness.map(  (articles, index) => {
        if(index>=Fitness.length-1) {
           return(
   <Link to={`/Fitness/${articles.id}`} className='Home-css'> 
   <div key={index} className="back-image2"  style={   {backgroundImage: `url(${articles.image})`,  backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
        width:"30vw",height:"25vh" }  }>
       
        <div className="">
      
        <span>{articles.date}</span>
           </div>
          </div>
          </Link>
          )
       }
       }
        )
              
            }
        </div>
        <div>
            {
                // eslint-disable-next-line
      Technology.map(  (article, index) => {
        if(index>=Technology.length-1) {
           return(
            <Link to={`/Technology/${article.id}`} className='Home-css'> 
        <div key={index}  className="back-image3" style={{backgroundImage: `url(${article.image})`,  backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
        width:"30vw",height:"25vh" }  }>
       
        <div className="">
      
        <span>{article.date}</span>
           </div>
          </div>
          </Link>
          )
       }
       }
        )
            }
        </div>
        </div>
        </div>
    
    
    </div>
    </>
  )
}

export default Images