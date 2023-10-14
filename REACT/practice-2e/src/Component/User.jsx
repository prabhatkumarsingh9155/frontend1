import React from 'react'
import {useNavigate} from "react-router-dom"
const User = () => {

const Navigate=useNavigate();


   
  return (
    <div>
    <h1>THIS IS  PAGE</h1>

    <button onClick={function(){Navigate("/home")}}>GO TO HOME PAGE</button>
    </div>


  )
}

export default User