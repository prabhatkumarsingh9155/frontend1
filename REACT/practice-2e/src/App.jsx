import React from "react"
import './App.css'
import { Route, Routes,BrowserRouter ,useNavigate, Navigate} from "react-router-dom"
import Ex1 from "./Component/Ex1.jsx";
import Ex2 from "./Component/Ex2.jsx";
import Navbar from './Component/Navbar';
import User from './Component/User';
import Service from './Component/Service';
import Support from './Component/Support';
import Contact from './Component/Contact';


function App() {

  return (
    <>
    <BrowserRouter>
   <Navbar/>
   
<Routes>

<Route  path='/home' element={<Ex1/>}>

<Route path='service' element={<Service/>}/>
<Route path='support' element={<Support/>}/>


</Route>

<Route path='/about' element={<Ex2/>}/>

<Route path="/user" element={<User/>} />
 
 <Route path='/*' element={<Navigate to={"/home"}/>}/>
<Route path='/contact' element={<Contact/>}/>
 

</Routes>




    </BrowserRouter>

  
    </>
  )
}

export default App
