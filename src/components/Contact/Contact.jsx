import React,  {useState} from 'react';
import "./Contact.css";

const Contact = () => {
	const [formData, setFormData]= useState ({
		name :"",
		email : "",
		message : ""
	
	});

	const handleChange = (e) => {
		setFormData((prevData) =>({
			...prevData,
			[e.target.id] : e.target.value	
		}))

	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	}	

	return (
		<div className = 'contact section-p' id ="contact">
		 <div className = 'container'>
			<div className = 'contact-section'>
			< div className = 'section-title'>
				<h3 className = 'text-brown'>Contacta<span className = 'text-dark'>me</span></h3>
		<p className = 'text'>I offer the right solution for your Tryp </p>

		</div>
		</div>
			<form className = 'contact-form mx-auto' onSubmit= {handleSubmit}>
				<div className = 'form-elem'>
					<input type= "text" value = {formData.name} className ="form-control" placeholder = 'Nombre' onChange = {handleChange} id = "name"/>
					
				</div>	
		<div className = 'form-elem'>

					<input type= "text" value = {formData.email} className ="form-control" placeholder = 'Email' onChange = {handleChange} id = "email"/>
					
		</div>
				<div className = 'form-elem'>
					<textarea rows = "2" value = {formData.message} className = "form-control" placeholder = 'Mensaje' onChange= {handleChange} id 	= "message">
					</textarea>
				</div>
				<button  onClick ="window.location.href='https://api.whatsapp.com/send?phone=50767724013&text=Gracias%20por%20contactarnos%2C%20digame%20como%20podemos%20ayudarlo'" target ="_blank" type = "submit" className= 'bg-brown text-white submit-btn fw-3 fs-22'>Cotizar</button>	
		

			</form>
		</div>
		</div>
	)

}

export default Contact
