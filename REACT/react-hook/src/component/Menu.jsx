import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                    <Link to={`/`} className="navbar-brand"></Link>

                    <button className="navbar-toggler" data-bs-toggle="collapse" dat-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">

                            
                                <Link to={`/ex1`} className="nav-link">Ex1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/ex2`} className="nav-link">Ex2</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/ex3`} className="nav-link">Ex3</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/ex4`} className="nav-link">ex4</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Menu