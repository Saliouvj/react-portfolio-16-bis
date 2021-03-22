import React  from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png'
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger premier  ">
            <div>
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt="logo" />
                </Navbar.Brand>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mx-auto text-center">
                <li>
                    {/* Link place des balises "a". Verifier votre DOM pour comprendre*/}
                    <NavLink to='/' exact activeClassName="nav-active" >
                        Home 
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/about" exact activeClassName="nav-active">
                        About 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeClassName="nav-active">
                        Contact 
                    </NavLink>
                </li>
                
            </ul>
            
            </div>
        </nav>
        
    )
}

export default Navigation;