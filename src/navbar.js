import React from 'react';
import {
    
    Link
    
  } from "react-router-dom";



const Navbar = () => {

   
    return (
        <>
        <nav>
          <ul className="ul">
            <li className="li">
              <Link className="link" to="/">Home</Link><br/>
              <Link className="link" to="/login">Login</Link><br/>
              <Link className="link" to="/about">About</Link><br/>
              <Link className="link" to="/contact">Contact</Link><br/>
            </li>
          </ul>
        </nav>
        </>
    )
}

export default Navbar;