
import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Services from './components/Services/Services.jsx';
import Work from './components/Work/Work.jsx'
function App() {
  return (
      <div className="App">
        <Header />
	<Services />
	<Work />  
    </div>
  );
}

export default App;
