import React, { useContext } from 'react'
import { TourContext } from './TourContext'
import { Link } from 'react-router-dom'

const SomeRelated = () => {
    const{value1,value2,value3}=useContext(TourContext)
    const[Technology]=value3;
    const[Fitness]=value2;
    const[Tourist]=value1;
  return (
    <div>
        <div className='borders'><h2>Some-Related-Stories</h2></div>
        <div className='TryThiscomponent'>
        <div className='Latest-related1'>
               <div className='latest-related'>
                  {
                      Technology.filter(data=>data.id==="11").map((latest)=>(
                          <>
                              <div >
                             <Link to={`/Technology/${latest.id}`}><img className='try-image' src={latest.image} alt="" /> </Link>
                              </div>
                             
                              <div>
                                  <h2>{latest.name}</h2>
                              </div>
                              <div className='text-color'>
                                  <p>{latest.info}</p>
                                  <p>{latest.description}</p>
                              </div>
                              <div>
                                  <h3>{latest.date}</h3>
                              </div>
                         </>
                      ))
                      
                  }
               </div>

               <div className='latest-related'>
                  {
                      Tourist.filter(data=>data.id==="2").map((latest)=>(
                         <>
                              <div >
                             <Link to={`/Tourism/${latest.id}`}> <img className='try-image' src={latest.image} alt="" /></Link>
                              </div>
                              <div>
                                  <h2>{latest.name}</h2>
                              </div>
                              <div className='text-color'>
                                  <p>{latest.info}</p>
                                  <p>{latest.description}</p>
                              </div>
                              <div>
                                  <h3>{latest.date}</h3>
                              </div>
                         </>
                      ))
                      
                  }
               </div>

               <div className='latest-related'>
                  {
                      
                      Fitness.filter((data)=>data.id==="5").map((latest)=>(
                          <>
                              <div >
                             <Link to={`/Fitness/${latest.id}`}><img className='try-image' src={latest.image} alt="" /></Link>
                              </div>
                              <div>
                                  <h2>{latest.name}</h2>
                              </div>
                              <div className='text-color'>
                                  <p>{latest.info}</p>
                                  <p>{latest.description}</p>
                              </div>
                              <div>
                                  <h3>{latest.date}</h3>
                              </div>
                              </>
                      ))
                      
                  }
               </div>
               </div>
               </div>
    </div>
  )
}

export default SomeRelated