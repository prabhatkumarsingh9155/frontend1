import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ex1 from './Component/Ex1'
import Ex2 from './Component/Ex2'
import Menu from './Component/Menu'


const App = () => {
  return (
    <BrowserRouter>
<Menu/>

<Routes>

<Route path={'/'} element={<Ex1/>}/>
<Route path={'/ex1'} element={<Ex1/>}/>
<Route path={'/ex2'} element={<Ex2/>}/>






</Routes>



      
    </BrowserRouter>
  )
}

export default App
