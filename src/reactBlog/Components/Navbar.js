import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor:"cadetblue"}}>
      <div className='Title'>
        <div className='sub-title1'>The</div>
        <div  className='sub-title2'>Times Of India</div>
      </div>
        <div className='header'>
            <ul type="none">
                <Link to="/Home" className='Home-css'><li>Home</li></Link>
                <Link to="/Tourism" className='Home-css' ><li>Tourism</li></Link>
                <Link to="/Fitness" className='Home-css'><li>Fitness</li></Link>
                <Link to="/Technology" className='Home-css'><li>Technology</li></Link>
                <Link to="/Bollywood" className='Home-css'><li>Bollywood</li></Link>
                <Link to="/Food" className='Home-css'><li>Food</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react'
// import {NavLink} from 'react-router-dom'
// import {BiMenu} from 'react-icons/bi'
// import {useParams} from 'react-router-dom'
// import './Navbar.css'

// const Navbar = () => {
//   const {id} = useParams()
//   const [bimenu, setBimenu]=useState("")
//   const ChangeBimenu = ()=>{
//     let val = bimenu
//     if(val===''){setBimenu("showBimenuList")}
//     else{setBimenu("")}
           
//            console.log("bimeu clicked")
//   }
//   return (
//     <>
//     <div className='navbarList'>
    
//        <div className='heading'> <div className='rotate'>The</div>  <div className='rotateNot'>Times Of India</div> <div className='bimenu' onClick={ChangeBimenu}><BiMenu /> </div></div>

//             <div className={`list${bimenu}`}>
//             <ul>
//                  <li> <NavLink className='animatLine' to='/Home'>Home</NavLink> </li>
//                  <li><NavLink className='animatLine' to='/Bollywood'>Bollywood</NavLink></li>
//                  <li><NavLink className='animatLine' to='/Fitness'>Sports</NavLink></li>
//                  <li><NavLink className='animatLine' to='/Technology'>Technology</NavLink></li>
//                  <li><NavLink className='animatLine' to='/Food'>Food</NavLink></li>
//                  <li><NavLink className='animatLine' to='/Tourism'>Tourism</NavLink></li>
               
//             </ul>
//             </div>
//     </div>
    
//     </>
//   )
// }

// export default Navbar