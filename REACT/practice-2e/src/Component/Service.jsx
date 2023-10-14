import React from 'react'
import {useLocation} from "react-router-dom"
const Service = () => {
  const location=useLocation()
  console.log(location)
  return (
    <div><h1>WELCOME TO SERVICE PAGE</h1>
    <h3>HELLO! USER HOW ARE YOU</h3></div>
  )
}

export default Service