import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Menu from './Component/Menu'
import Home from './Component/Home'
import Create from './Component/Create'
import Update from './Component/Update'
import Pnf from './Component/Pnf'

function App(props) {
  return (
   <BrowserRouter>

<Menu/>
<Routes>

<Route  path={`/`} element={<Home/>} />
<Route path={`/create`} element={<Create/>}/>
<Route  path={`/update`} element={<Update/>}/>
<Route path={`/*`} element={<Pnf/>}/>


</Routes>


   </BrowserRouter>
  )
}

export default App
