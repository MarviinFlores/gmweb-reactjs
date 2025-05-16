import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header =() => {
 return (
    <div className = 'header flex flex-col' id="header">
        <Navbar/>
        <div className='container flex'>
            <div className='header-content'>
                <h2 className="text-uppercase text-white op-07 fw-6 ls-2">Amazing Experience</h2>
                <h1 className="text-white fw-6 header-title">GM Transfer Service <span className='text-brown'> Tours & Transfers </span>Panama</h1>
                 <div className='btn-groups flex '>
                    
                    <a href="#work">
                    <button type= "button"  className="btn-item  bg-brown fw-4 ls-2">Tours</button>
                    </a>
                    
                    <a href="#contact">
                    <button type ="button" className= "btn-item bg-dark fw-4 ls-2" >Contact</button>
                    </a>
        

                </div>

            </div>
        </div>
    </div>

 )
}
export default Header  
