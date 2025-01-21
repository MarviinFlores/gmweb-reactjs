import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images.js";
import {about_stats} from "../../constants/data.js";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const About = () => {

	const vidRef = useRef(null);
	const [toggleVideo, setToggleVideo] = useState(false);
	const playVideo = () => {
		setToggleVideo(!toggleVideo);
		if (toggleVideo) vidRef.current.play();
		else vidRef.current.pause();
		}

	return (
	<div className = 'about section-p' id="about">
		<div className = 'container'>
		     <div className = 'about-content'>	
			<div className = 'about-grid grid'>
				<img src = {images.About_Alex} alt ="" className = 'about-img mx-auto'/>
				<div className = 'section-title'>
					<h3 className = 'text-brown'>GM< span className = 'text-dark'>Transfer</span></h3>
				<p className = 'text mx-auto'>Our mission is to offer a seamless and gentle journey through the enchanting landscapes of Panama.</p>
				</div>
			</div>
			<div className= 'about-grid grid'>
				{
					about_stats.map((about_stat, index) => { 
						return (
							<div className= 'about-item text-center flex' key = {index}>								<div className= 'about-item-icon'>
								<img src = {about_stat.image} alt = ""/>	
							    </div>	
							<div className = 'about-item-text text-left'>
								<h3 className = 'fs-24 ls-2'>{about_stat.value}</h3>
								<p className = 'text'>{about_stat.title}</p>
							</div>

							</div>


						)
					
					})
				}
				
			</div>
		<div className = 'about-grid grid'>
				<div className = 'section-title'>
				<h3 className = 'text-brown'>How<span className = 'text-dark'>We Are</span></h3>
				<p className = 'text mx-auto'>GM Transfer Service is a premier tourism transportation service operated by a dedicated group of professionals based in Panama, Central America. Founded in 2018, we have established ourselves as a reliable and trustworthy choice for all your travel needs in the region.

		Our team is committed to providing exceptional service, ensuring that every journey with us is safe, comfortable, and enjoyable. Whether you are a tourist exploring the beautiful landscapes of Panama or a local looking for reliable transportation options, GM Transfer Service is here to cater to all your transportation needs.</p>				
			</div>
			<div className ='about-video'>
				<video className = 'about-video' autoPlay loop ref = {vidRef}>
				<source src = {video} type = "video/mp4"/>
				</video>
				<button type = "button" className = 'vidPlayBtn flex flex-c' onClick= {playVideo}>
				<FaPlay className = 'text-brown' size = {28}/>
				</button>

			</div>
		</div>
	      </div> 		

	</div>
	</div>
	)
}
 export default About

