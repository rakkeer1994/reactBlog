import { useContext } from "react";
import { TourContext } from "./TourContext";
import { Link } from "react-router-dom";

const Fitness = () =>{
    const {value4}=useContext(TourContext)
    const[Bollywood]=value4;
    console.log("Fitness")

    return (
        <div className="tourism-cont">
        <div className='main-cont'>
        <div className='top-heading'>
           <div><h2>Bollywood</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Bollywood.map( (moviedetails,index) =>
              <div className='design'>
                <div >
               <Link to={`/Bollywood/${moviedetails.id}`}><img className="images" src={moviedetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h2>{moviedetails.name}</h2>
              </div>
              
              <div>
              <p>{ moviedetails.info}</p> 
              </div>
              <div>
                <h2>{moviedetails.date}</h2>
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
            Bollywood.map( (moviedetails,index) =>
              <div className='design1'>
                <div >
                <Link to={`/Bollywood/${moviedetails.id}`}><img className="images1" src={moviedetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{moviedetails.name}</h3>
              </div>
              
              <div>
                <h5>{moviedetails.date}</h5>
              </div>
              </div>
              </div>
            
              )
            }
          </div>
      </div>
    )
}
export default Fitness