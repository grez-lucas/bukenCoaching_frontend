import {useState} from 'react'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");


  return (
    <>
      <Header setSelectedOptionMain={setSelectedOption} />
      {selectedOption === "Home" && <Home />}
      {selectedOption === "About Me" && <p>About Me</p>}
      {selectedOption === "Coaching" && <p>Coaching</p>}
      <Footer />
    </>
  );
}

export default App;
