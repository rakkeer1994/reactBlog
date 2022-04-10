import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TourContext } from './TourContext';

const Tourism = () => {
     
    let {value1}=useContext(TourContext);
    // let [Tourist] = useContext(TourContext);
     const[Tourist] =value1;
  return (
    <div className="tourism-cont">
        <div className='main-cont'>
        <div className='top-heading'>
           <div><h2>Tourism</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
              Tourist.map( (tourisms,index) =>
              <div className='design'>
                <div >
               <Link to={`/Tourism/${tourisms.id}`}><img className="images" src={tourisms.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h2>{tourisms.name}</h2>
              </div>
              
              <div>
              <p>{ tourisms.info}</p> 
              </div>
              <div>
                <h2>{tourisms.date}</h2>
              </div>
              
              </div>
              </div>
            
              )
            }
            <div className='Horizontalline'>
            </div>
        </div>

          <div className='main-cont1'>
          <div className='top-heading'>
           <div><h2>Top-Posts</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
              Tourist.map( (tourisms,index) =>
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
          </div>
      </div>
  )
}

export default Tourism