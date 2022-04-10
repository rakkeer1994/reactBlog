import { useContext } from "react";
import { TourContext } from "./TourContext";
import { Link } from "react-router-dom";

const Fitness = () =>{
    const {value2}=useContext(TourContext)
    const[Fitness]=value2;
    console.log("Fitness")

    return (
        <div className="tourism-cont">
        <div className='main-cont'>
        <div className='top-heading'>
           <div><h2>Fitness</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Fitness.map( (Fitnessdetails,index) =>
              <div className='design' key={Fitnessdetails.id}>
                <div >
               <Link to={`/Fitness/${Fitnessdetails.id}`}><img className="images" src={Fitnessdetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h2>{Fitnessdetails.name}</h2>
              </div>
              
              <div>
              <p>{ Fitnessdetails.info}</p> 
              </div>
              <div>
                <h2>{Fitnessdetails.date}</h2>
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
            Fitness.map( (Fitnessdetails,index) =>
              <div className='design1'>
                <div >
                <Link to={`/Fitness/${Fitnessdetails.id}`}><img className="images1" src={Fitnessdetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{Fitnessdetails.name}</h3>
              </div>
              
              <div>
                <h5>{Fitnessdetails.date}</h5>
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
