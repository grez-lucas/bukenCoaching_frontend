import {useState} from 'react'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CoachingForm from './components/CoachingForm';
import Coaching from './components/Coaching';
import FAQ from './components/FAQ'
import Appointments from './components/Appointments';
import AboutMe from './components/AboutMe';

function App() {
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleSetSelectedOption = (option : string) => {
    window.scrollTo( { top: 0, left: 0, behavior: 'smooth' });
    setSelectedOption(option);
  }

  return (
    <>
      <Header setSelectedOptionMain={handleSetSelectedOption} option={selectedOption} />
      {selectedOption === "Home" && <Home setSelectedOption={handleSetSelectedOption}/>}
      {selectedOption === "¿Quien soy?" && <AboutMe setSelectedOption={handleSetSelectedOption}/>}
      {selectedOption === "Sobre mi Coaching" && <Coaching setSelectedOption={handleSetSelectedOption} />}
      {selectedOption === "Coaching Form" && <CoachingForm setSelectedOption={handleSetSelectedOption}/> }
      {selectedOption === "Agenda una consulta gratis" && <Appointments />}
      {selectedOption === "Preguntas Frecuentes" && <FAQ />}
      <Footer />
    </>
  );
}

export default App;
