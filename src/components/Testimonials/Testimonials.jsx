import React from 'react';
import "./Testimonials.css";
import { testimonials} from '../../constants/data.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {logos} from "../../constants/data";

const Testimonials = () => {
	var setting = {
		dots: true,
		infinite : true,
		autoplay : true,
		speed : 500,
		slidesToShow : 1,
		slidesToScroll:1,
		arrows : false
	};

	return (

	<div className = 'testimonials section-p'>
		<div className = 'container'>
	 		<div className = 'testimonials-content'>
				<div className = 'section-title'>
			<h3 className = 'text-brown'>Clientes<span className = 'text-white'>Testimonials</span></h3>
			</div>
			<div className = 'testimonials-list'>	
				<Slider {...settings}>
				{
					testimonials.map((testimonial, index) => {
					return (
						<div className = 'testimonials-item text-center text-white' key = {index}>
						<p className = 'text mx-auto'> {testimonial.paragraph}</p>
							<span  className = 'fs-22'>{testimonial.name}</span>
	 						<small>{testmonial.post}</small>
						</div>
			</div>
					)
					})
				}
			  </Slider>	
			</div>
		</div>
		</div>
	</div>	
	)
	
}



export default Testimonials

