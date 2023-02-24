
import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Services from './components/Services/Services.jsx';
import Work from './components/Work/Work.jsx'
import  Newsletter from  './components/Newsletter/Newsletter.jsx';
import About from './components/About/About.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';


function App() {
  return (
      <div className="App">
        <Header />
	<Services />
	<Work /> 
	<Newsletter />  
	<About />  
	<Testimonials />  
    </div>
  );
}

export default App;
