import React from 'react'
import{useNavigate} from "react-router-dom"
const Ex2 = () => {

  const Nav=useNavigate();

const Op=function(){
Nav("/home")



}
  return (
   <>


<h1>ABOUT PAGE</h1>
<h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero id urna lacinia consectetur.</p>

        <h2>Our Team</h2>
        <p>We are a dedicated team of professionals committed to delivering high-quality services to our clients.</p>


        <button onClick={()=>{Op()}}>GO TO HOME PAGE</button>
   </>



    
  )
}

export default Ex2