import React from 'react'

 const HomePic = () => {

  const time = new Date().toLocaleString();

    const PicData = [
        {
            id:1,
            name: "the iron man",
            imgSrc: "https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720__340.jpg",
            webLink: "https://youtu.be/T3IqVaB65TU"
        },
       
        {
            id:2,
            name: "the postman",
            imgSrc: "https://media.istockphoto.com/photos/bandra-worli-sea-link-mumbai-picture-id915681526?b=1&k=20&m=915681526&s=170667a&w=0&h=JiPLQYQ3jgaQm2aAYY1hQifLhOsB9PIeKc3MZ5v1Iwc=",
            webLink: "https://youtu.be/T3IqVaB65TU"
        },
        {
            id:3,
            name: "the angry bird",
            imgSrc: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
            webLink: "https://youtu.be/T3IqVaB65TU"
        },
    ]
    
  return (
    <div className='HomePicDiv'>
        {/* {PicData.map((val)=>{
          return  <img  src={val.imgSrc} alt='image error'/>
        })} */}
       <div className='one'> <img  src={PicData[0].imgSrc} alt='image error'/> <span className='text'>This Is React Blog App <br></br> {time}</span></div>
       <div className='two'> <img  src={PicData[1].imgSrc} alt='image error'/> <span className='text1'></span></div>
       <div className='three'> <img  src={PicData[2].imgSrc} alt='image error'/> <span className='text2'></span></div>
    </div>
  )
}

export default HomePic
