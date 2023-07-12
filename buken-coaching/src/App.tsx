import {useState} from 'react'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CoachingForm from './components/CoachingForm';

function App() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");


  return (
    <>
      <Header setSelectedOptionMain={setSelectedOption} />
      {selectedOption === "Home" && <Home setSelectedOption={setSelectedOption}/>}
      {selectedOption === "About Me" && <p>About Me</p>}
      {selectedOption === "Coaching" && <p>Coaching</p>}
      {selectedOption === "Coaching Form" && <CoachingForm setSelectedOption={setSelectedOption}/> }
      <Footer />
    </>
  );
}

export default App;
