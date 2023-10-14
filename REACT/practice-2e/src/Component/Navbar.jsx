import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='conatiner'>



        <NavLink to={"/home"} className={"op"}>HOME</NavLink>
        <NavLink to={"/about"}> ABOUT</NavLink>
        <NavLink to={"/contact"}>CONTACT</NavLink>
        <NavLink to={"/op"}>PRABHAT</NavLink>
        <NavLink to={'/user'}>GOLDI</NavLink>
      
        

    </div>
  )
}

export default Navbar