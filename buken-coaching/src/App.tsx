import {useState} from 'react'; 
import './App.css';
import Header from './components/Header';

function App() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");


  return (
    <>
      <Header setSelectedOptionMain={setSelectedOption} />
      {selectedOption === "Home" && <p>Home</p>}
      {selectedOption === "About Me" && <p>About Me</p>}
      {selectedOption === "Coaching" && <p>Coaching</p>}
    </>
  );
}

export default App;
