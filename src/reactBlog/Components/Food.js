import { useContext } from "react";
import { TourContext } from "./TourContext";
import { Link } from "react-router-dom";

const Fitness = () =>{
    const {value5}=useContext(TourContext)
    const[Food]=value5;
    console.log("Fitness")

    return (
        <div className="tourism-cont">
        <div className='main-cont'>
        <div className='top-heading'>
           <div><h2>Food</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Food.map( (Fooddetails,index) =>
              <div className='design'>
                <div >
               <Link to={`/Food/${Fooddetails.id}`}><img className="images" src={Fooddetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h2>{Fooddetails.name}</h2>
              </div>
              
              <div>
              <p>{ Fooddetails.info}</p> 
              </div>
              <div>
                <h2>{Fooddetails.date}</h2>
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
            Food.map( (Fooddetails,index) =>
              <div className='design1'>
                <div >
                <Link to={`/Food/${Fooddetails.id}`}><img className="images1" src={Fooddetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{Fooddetails.name}</h3>
              </div>
              
              <div>
                <h5>{Fooddetails.date}</h5>
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