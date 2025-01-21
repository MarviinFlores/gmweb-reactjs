import React,{useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar =() =>{
	const [navToggler,setNavToggler]= useState(false);
	const closeNavbar = () => setNavToggler(false); 

    return (
         <nav className='navbar'>
            <div className='container'>
                <div className='navbar-content'>
                    <div className='brand-and-toggler flex flex-sb'> 
                    	<Link to ="/" className='navbar-brand text-uppercase fw-7 text-white ls-2 fs-22'>G&M Transfer Service</Link>
                     <button type='button' className='navbar-open-btn text-white' onClick={()=>setNavToggler(!navToggler)}>
                            <FaBars size={30}/>
                    </button>
			<div className ={navToggler ? "navbar-collapse show-navbar-collapse":"navbar-collapse"}>
	    			<button type= "button" className = 'navbar-close-btn text-white' onClick = {closeNavbar} >
	    			<FaTimes size ={30}/>
	    			</button>
	    			<ul className ='navbar-nav'>
	    			  <li className ='nav-item'>
	    			  	 <Link to href = "#"  className = 'nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Home</Link>
	    			  </li>
	    			  <li className ='nav-item'>
	    				 <a href = "#services"  className = 'nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Services</a>
	    			  </li>
			          <li className ='nav-item'>
	    			 	 <a href = "#work"  className = 'nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Tours</a>
	    			  </li>
				  <li className ='nav-item'>
	    				 <a  href= "#about"  className = 'nav-link text-white ls-1 text-uppercase fw-6 fs-22'>About</a>
	    			  </li>
	    			  <li className ='nav-item'>
	    			 	 <a href = "#testimonials"  className = 'nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Testimonials</a>
	    			  </li>
				  <li className ='nav-item'>
	    			 	 <a href = "#contact"  className = 'nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Contact</a>
	    		          </li>
	    			</ul>
	    		</div>

                    </div>

                </div>
            </div>
        </nav>
    )
}
 export default Navbar
    

