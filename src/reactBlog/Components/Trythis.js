import React, { useContext, useState } from 'react'
import { TourContext } from './TourContext'
import { Link } from 'react-router-dom';

const Trythis = () => {
    const{value1}=useContext(TourContext);
    const[Tourist]=value1;
    const{value4}=useContext(TourContext);
    const[Bollywood]=value4;
    const{value5}=useContext(TourContext);
    const[Food]=value5;

    const [Load,setload]=useState(false);

    const LoadMore=() =>{
        setload(true);
    }
    const Loadless=()=>{
        setload(false);
    }
  return (
    <div>
       <div className="TryThiscomponent">
           { Load ? 
           <>
           <div className='Latest-related1'>
               <div className='latest-related'>
                  {
                      Bollywood.filter(data=>data.id==="15").map((latest)=>(
                          <>
                              <div >
                             <Link to={`/Bollywood/${latest.id}`}><img className='try-image' src={latest.image} alt="" /> </Link>
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
                      Tourist.filter(data=>data.id==="3").map((latest)=>(
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
                      Food.filter((data)=>data.id==="18").map((latest)=>(
                          <>
                              <div >
                             <Link to={`/Bollywood/${latest.id}`}><img className='try-image' src={latest.image} alt="" /></Link>
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
           <div>
              <button className='loading-buttons' onClick={Loadless}>Load-less <i class="fa-solid fa-rotate"></i></button>
           </div>
           </>
           :
           <div>
                <button className='loading-buttons' onClick={LoadMore}>For-More <i class="fa-solid fa-arrow-down"></i></button>
           </div>
           }
       </div>
    </div>
  )
}

export default Trythis