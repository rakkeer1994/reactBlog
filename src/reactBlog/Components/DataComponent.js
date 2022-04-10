import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SomeRelated from './SomeRelated';
import { TourContext } from './TourContext';
import Trythis from './Trythis';

const DataComponent = () => {
  const{id}=useParams();
  const{value1,}=useContext(TourContext);
  const[Tourist]=value1;
  const{value2,}=useContext(TourContext);
  const[Fitness]=value2;
  const{value3,}=useContext(TourContext);
  const[Technology]=value3;
  
  const{value4,}=useContext(TourContext);
  const[Bollywood]=value4;
  const{value5,}=useContext(TourContext);
  const[Food]=value5;

  const[data,setdata]=useState({
    image:"",
    name:"",
    info:"",
    date:"",
    description:"",
  })

  useEffect(()=>{
   Tourist.forEach((view) => {
     if(view.id===id){
      //  console.log("data-matched");
       setdata({
         image:view.image,
         name:view.name,
         info:view.info,
         date:view.date,
         description:view.description,
       })
     }
   });
  })

  useEffect(()=>{
    Fitness.forEach((view) => {
      if(view.id===id){
        // console.log("data-matched");
        setdata({
          image:view.image,
          name:view.name,
          info:view.info,
          date:view.date,
          description:view.description,
        })
      }
    });
   })
   useEffect(()=>{
    Food.forEach((view) => {
      if(view.id===id){
        // console.log("data-matched");
        setdata({
          image:view.image,
          name:view.name,
          info:view.info,
          date:view.date,
          description:view.description,
        })
      }
    });
   })
   useEffect(()=>{
  Technology.forEach((view) => {
      if(view.id===id){
        // console.log("data-matched");
        setdata({
          image:view.image,
          name:view.name,
          info:view.info,
          date:view.date,
          description:view.description,
        })
      }
    });
   })
   useEffect(()=>{
    Bollywood.forEach((view) => {
        if(view.id===id){
          // console.log("data-matched");
          setdata({
            image:view.image,
            name:view.name,
            info:view.info,
            date:view.date,
            description:view.description,
          })
        }
      });
     })
  return (
    <>
    <div className="Dynamic-component">
    <div>
        <h1>{data.name}</h1>
    </div>
    <hr />
    <div>
      <img className='data-image' src={data.image} alt="" />
    </div>
    <div>
      <p>{data.info}</p>
      <p>{data.description}</p>
    </div>
    <div>
      <h3>{data.date}</h3>
    </div>
    </div>
    <div>
      <SomeRelated/>
      <Trythis/>
    </div>
    </>
  )
}

export default DataComponent