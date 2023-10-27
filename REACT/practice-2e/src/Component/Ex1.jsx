import React from 'react'

import {Link,Outlet} from "react-router-dom"
const Ex1 = () => {


  return (
   <>


<div >
        <h2>Introduction</h2>
        <p>Welcome to our website! We are a company dedicated to providing high-quality products/services to our customers.</p>
        <p>Our mission is to...</p>
        <p>Our vision is...</p>

        <h2>Our Values</h2>
        <ul>
            <li>Quality</li>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
        </ul>

        

        <Link to={'/home/service'} state={{name:"gopi",age:12}}>SERVICE</Link>
        

        
        <Link to={'/home/support'}>SUPPORT</Link>
        <Outlet/>

    </div>




      
      
      
        
    

   






   </>
  )
}

export default Ex1
