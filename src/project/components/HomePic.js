import React from 'react'

 const HomePic = () => {

  const time = new Date().toLocaleString();

    const PicData = [
        {
            id:1,
            name: "the iron man",
            imgSrc: "https://cdn.vox-cdn.com/thumbor/okevM8PnR_-ZBdAdmi0gpTr0Smg=/0x0:5472x3648/920x613/filters:focal(2299x1387:3173x2261):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70576220/1233995608.0.jpg",
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
       <div className='one'> <img  src={PicData[0].imgSrc} alt='image error'/> <span className='text'>Solar is the Future of Energy <br></br> {time}</span></div>
       <div className='two'> <img  src={PicData[1].imgSrc} alt='image error'/> <span className='text1'></span></div>
       <div className='three'> <img  src={PicData[2].imgSrc} alt='image error'/> <span className='text2'></span></div>
    </div>
  )
}

export default HomePic
