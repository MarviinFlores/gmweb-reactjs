
import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Services from './components/Services/Services.jsx';
import Work from './components/Work/Work.jsx'
//import  Newsletter from  './components/Newsletter/Newsletter.jsx';
import About from './components/About/About.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import  Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import whatsappLogo from './assets/images/whatsappLogo.png'

function App() {
  return (
	<>
      <div className="App">
        <Header />
     	<Services />
    	<Work /> 
	    <About />  
	    <Testimonials />  
    	<Contact />  
    	<Footer /> 
    <div class= "fixed-bottom right-100 p-3 " style = {{zIndex:"6",left: "initial"}}>
		<a href="https://wa.me/+50765788940?text=Hello?" target='_blank'>
		<img src={whatsappLogo} width ="60" alt="aaa"/>

		</a>
	</div>


	</div>
</>
  );
  
}

export default App;
