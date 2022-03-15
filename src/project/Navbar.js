import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {useParams} from 'react-router-dom'

const Navbar = () => {
  const {id} = useParams()
  const [bimenu, setBimenu]=useState("")
  const ChangeBimenu = ()=>{
    let val = bimenu
    if(val===''){setBimenu("showBimenuList")}
    else{setBimenu("")}
           
           console.log("bimeu clicked")
  }
  return (
    <>
    <div className='navbarList'>
    
       <div className='heading'> <div className='rotate'>The</div>  <div className='rotateNot'>Times Of India</div> <div className='bimenu' onClick={ChangeBimenu}><BiMenu /> </div></div>

            <div className={`list${bimenu}`}>
            <ul>
                 <li> <NavLink className='animatLine' to='/home'>Home</NavLink> </li>
                 <li><NavLink className='animatLine' to='/hollywood/:id'>Hollywood</NavLink></li>
                 <li><NavLink className='animatLine' to='/sports/:id'>Sports</NavLink></li>
                 <li><NavLink className='animatLine' to='/technology/:id'>Technology</NavLink></li>
                 <li><NavLink className='animatLine' to='/contact'>Contact Us</NavLink></li>
                 <li><NavLink className='animatLine' to='/about'>About</NavLink></li>
            </ul>
            </div>
    </div>
    
    </>
  )
}

export default Navbar