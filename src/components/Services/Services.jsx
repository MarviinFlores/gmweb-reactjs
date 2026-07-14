import React from 'react';
import "./Services.css";
import {services} from "../../constants/data.js";

const Services = () => {
	return (
		<div className='services section-p' id = "services">
		    <div className='container'>
			<div className='services-content'>
			         <div className = 'section-title'>
		         	<h2 className ='text-brown'>Our <span className ='text-dark'>Panama Tour Services</span></h2>
		         	<h3 className ='text'>We Offer the Best Panama Tour Experience</h3>
		         </div>
				
				<div className = 'services-list grid'>
					{
						services.map((service, index) => {
							return (
							<div className ='services-item text-center' key = {index}>
							<div className = 'services-item-img'>
								<img src = {service.image} className ="mx-auto" alt = {service.title} />
							</div>
								<div className = 'services-item-text'>
									<h4 className= 'fs-22 fw-5 op-08'>{service.title}</h4>
									<p className= 'text mx-auto'>{service.paragraph}</p>
								</div>
							</div>							
						)

						})
					}
								
					</div>
		         	 </div>
		         </div>
	           </div>
	)
}

export default Services
