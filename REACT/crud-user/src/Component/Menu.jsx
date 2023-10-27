import React from "react";
import {Link} from "react-router-dom"




const Menu = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-success">
<div className="container">
   <Link to={'/'} className="navbar-brand">CRUD-User</Link>
   <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
    <span className="navbar-toggler-icon"></span>
   </button>




   <div className="collapse navbar-collapse" id="menu">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link to={'/'} className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
        <Link to={'/create'} className="nav-link">Create</Link>

        </li>
    </ul>
   </div>
</div>



    </div>
  )
}

export default Menu