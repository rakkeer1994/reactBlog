import { useContext } from "react"
import { TourContext } from "./TourContext"
import { Link } from "react-router-dom";


const Technology= () =>{
    const{value3}=useContext(TourContext);
    const[Technology]=value3;

    return (
        <div className="tourism-cont">
            <div className='main-cont'>
            <div className='top-heading'>
           <div><h2>Technology</h2></div>
           <div className='toppost-border'></div>
           </div>
                {
                    Technology.map((technologies,index)=>
                    <div className='design'>
                        <div>
            <Link to={`/Technology/${technologies.id}`}><img className="images" src={technologies.image} alt="" /></Link>
                        </div>
                        <div className='content-data'>
                            <div>
                            <h2>{technologies.name}</h2>
                        </div>
                        <div>
                            <p>{technologies.info}</p>
                        </div>
                        <div>
                            <h2>{technologies.date}</h2>
                        </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className='main-cont1'>
            <div className='top-heading'>
           <div><h2>Top-Posts</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Technology.map( (technologies,index) =>
              <div className='design1'>
                <div >
                <Link to={`/Technology/${technologies.id}`}><img className="images1" src={technologies.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{technologies.name}</h3>
              </div>
              
              <div>
                <h5>{technologies.date}</h5>
              </div>
              </div>
              </div>
            
              )
            }
          </div>
        </div>
    )
}
export default Technology