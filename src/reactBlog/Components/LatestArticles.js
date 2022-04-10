import React, { useContext } from 'react'
import { TourContext } from './TourContext'
import { Link } from 'react-router-dom'

const LatestArticles = () => {
    const {value1,value2,value3,value4,value5} = useContext(TourContext)
    const[Tourist]=value1;
    const[Fitness]=value2;
    const[Technology]=value3;
    const[Bollywood]=value4;
    const[Food]=value5;
  return (
    <div className='LatestArticles1'>
      <div className='latestarticlesleft'>
        <div className="latestheading">
        <div><h2>LatestArticles</h2></div>
        <div className='border-bottoms'></div></div>
          { // eslint-disable-next-line
              Tourist.map( (touristdetails,index) =>{
                    if(index >=Tourist.length-1 )
                    return (
                <div key={index} className='design'>
                  <div >
                 <Link to={`/Tourism/${touristdetails.id}`}><img className="images" src={touristdetails.image} alt="" /></Link>
                  </div>
                  <div className='content-data'>
                <div >
                 <h2>{touristdetails.name}</h2>
                </div>
                
                <div>
                <p>{ touristdetails.info}</p> 
                </div>
                <div>
                  <h2>{touristdetails.date}</h2>
                </div>
                
                </div>
                </div>
                    )
                 
                }
                
              
                )
              
          }

        { // eslint-disable-next-line
              Fitness.map( (Fittdetails,index) =>{
                    if(index >=Fitness.length-1 )
                    return (
                <div key={index} className='design'>
                  <div >
                 <Link to={`/Fitness/${Fittdetails.id}`}><img className="images" src={Fittdetails.image} alt="" /></Link>
                  </div>
                  <div className='content-data'>
                <div >
                 <h3>{Fittdetails.name}</h3>
                </div>
                
                <div>
                <p>{ Fittdetails.info}</p> 
                </div>
                <div>
                  <h2>{Fittdetails.date}</h2>
                </div>
                
                </div>
                </div>
                    )
                 
                }
                
              
                )
              
          }

{ // eslint-disable-next-line
              Technology.map( (techdetails,index) =>{
                    if(index >=Technology.length-1 )
                    return (
                <div key={index} className='design'>
                  <div >
                 <Link to={`/Technology/${techdetails.id}`}><img className="images" src={techdetails.image} alt="" /></Link>
                  </div>
                  <div className='content-data'>
                <div >
                 <h3>{techdetails.name}</h3>
                </div>
                
                <div>
                <p>{ techdetails.info}</p> 
                </div>
                <div>
                  <h2>{techdetails.date}</h2>
                </div>
                
                </div>
                </div>
                    )
                 
                }
                
              
                )
              
          }

{ // eslint-disable-next-line
              Food.map( (fooddetails,index) =>{
                    if(index >=Food.length-1 )
                    return (
                <div key={index} className='design'>
                  <div >
                 <Link to={`/Food/${fooddetails.id}`}><img className="images" src={fooddetails.image} alt="" /></Link>
                  </div>
                  <div className='content-data'>
                <div >
                 <h3>{fooddetails.name}</h3>
                </div>
                
                <div>
                <p>{ fooddetails.info}</p> 
                </div>
                <div>
                  <h2>{fooddetails.date}</h2>
                </div>
                
                </div>
                </div>
                    )
                 
                }
                
              
                )
              
          }


  </div>
      <div className="lastest-articles-right">
           <div className='top-heading'>
           <div><h2>Top-Posts</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
              Tourist.map( (tourisms,index) =>{
                if(index >= Tourist.length-1){
                  return(
           <div className='design1'>
                <div >
                <Link to={`/Tourism/${tourisms.id}`}><img className="images1" src={tourisms.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{tourisms.name}</h3>
              </div>
              
              <div>
                <h5>{tourisms.date}</h5>
              </div>
              </div>
              </div>
                  )
                }
              }
              
            
              )
            }

{
              Food.map( (fooddetails,index) =>{
                if(index >= Tourist.length-1){
                  return(
           <div className='design1'>
                <div >
                <Link to={`/Food/${fooddetails.id}`}><img className="images1" src={fooddetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{fooddetails.name}</h3>
              </div>
              
              <div>
                <h5>{fooddetails.date}</h5>
              </div>
              </div>
              </div>
                  )
                }
              }
              
            
              )
            }

{
              Bollywood.map( (mvedetails,index) =>{
                if(index >= Tourist.length-1){
                  return(
           <div className='design1'>
                <div >
               <Link to={`/Bollywood/${mvedetails.id}`}><img className="images1" src={mvedetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{mvedetails.name}</h3>
              </div>
              
              <div>
                <h5>{mvedetails.date}</h5>
              </div>
              </div>
              </div>
                  )
                }
              }
              
            
              )
            }

          {
             Fitness.map( (Fittdetails,index) =>{
                if(index >= Fitness.length-1){
                  return(
           <div className='design1'>
                <div >
                <Link to={`/Fitness/${Fittdetails.id}`}><img className="images1" src={Fittdetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{Fittdetails.name}</h3>
              </div>
              
              <div>
                <h5>{Fittdetails.date}</h5>
              </div>
              </div>
              </div>
                  )
                }
              }
              
            
              )
            }

{
             Technology.map( (techdetails,index) =>{
                if(index >= Technology.length-1){
                  return(
           <div className='design1'>
                <div >
                <Link to={`/Technology/${techdetails.id}`}><img className="images1" src={techdetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{techdetails.name}</h3>
              </div>
              
              <div>
                <h5>{techdetails.date}</h5>
              </div>
              </div>
              </div>
                  )
                }
              }
              
            
              )
            }
      </div>
  </div>
  )
}

export default LatestArticles