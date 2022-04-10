import React, { useContext } from 'react'
import { TourContext } from './TourContext'
import { Link } from 'react-router-dom'

const LatestStories = () => {
    const{value5,value1,value3}=useContext(TourContext)
    const[Food]=value5;
    const[Tourist]=value1;
    const[Technology]=value3

  return (
    <div>
         <>
    <div className='latestheading'><h1>LatestStories</h1>
    <div className='border-bottoms border2'></div></div>
    <div className='latest-cont'>
     
        {   // eslint-disable-next-line
Food.map((article,index) => {
if(index>=Food.length-1) {
return(
<div key={index} className="latest-fitness" >
  
<div>
<Link to={`/Food/${article.id}`}><img  src={  article.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/> </Link>
  
  </div>
<div><h2>Food</h2></div>
<div>
{/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
<div >{  article.info  }</div>
</div>
<div>
<span ><h4>{ article.date }</h4></span>
{/* <span > / { article.PublishedDate  }</span> */}
</div>
</div> 
   )
     }
    }
    )    
  }
    
    {  // eslint-disable-next-line
       Tourist.map((tourdetails,index)=>{
         if(index >= Tourist.length-1){
         return (
           <div key={index} className='latest-fitness'>
             <div>
               <Link to={`/Tourism/${tourdetails.id}`}><img  src={tourdetails.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/></Link>
              </div>
    <div><h2>Tourism</h2></div>
   <div>
   {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
   <div >{  tourdetails.info  }</div>
   </div>
   <div>
     <span ><h4>{ tourdetails.date }</h4></span>
     {/* <span > / { article.PublishedDate  }</span> */}
     </div>
           </div>
         )
         }
       }

       )
    }

{  // eslint-disable-next-line
       Technology.map((techdetails,index)=>{
         if(index >= Technology.length-1){
         return (
           <div key={index} className='latest-fitness'>
             <div>
               <Link to={`/Technology/${techdetails.id}`}><img  src={techdetails.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/></Link>
               </div>
    <div><h2>Technology</h2></div>
   <div>
   {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
   <div >{ techdetails.info  }</div>
   </div>
   <div>
     <span ><h4>{ techdetails.date }</h4></span>
     {/* <span > / { article.PublishedDate  }</span> */}
     </div>
           </div>
         )
         }
       }

       )
    }



</div>
</> 
    </div>
  )
}

export default LatestStories