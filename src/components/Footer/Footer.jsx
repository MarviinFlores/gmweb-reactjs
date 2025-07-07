import React from 'react';
import './Footer.css'
import {FaFacebookF, FaInstagram, } from 'react-icons/fa';

const  Footer = () => {
	return (
		<div className ='footer bg-dark section-p'id = "footer">
			<div className = 'section-title'>
				<h3 className = 'text-brown'>Follow<span  className = 'text-white'>Us</span></h3>
			</div>

			<div className = 'footer-content'>
			<ul className = 'footer-social-links flex flex-c '>
				<li>
				  <a href = "https://facebook.com/gmtransferservice" target ="_blank" rel = "noreferrer" className = 'text-white'>
					<FaFacebookF />
				  </a>
			         </li>
				<li>
				  <a href = "https://instagram.com/gmtransferservice" target ="_blank" rel = "noreferrer" className = 'text-white'>
					<FaInstagram />
				  </a>
			         </li>
					

			</ul>
				
				<p className = 'text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved & copyright 2023</p>
		         </div>
		 </div> 
	)
}

export default Footer
