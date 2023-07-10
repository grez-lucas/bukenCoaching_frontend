import {useState} from 'react'; 
import './App.css';
import Header from './components/Header';

function App() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");


  return (
    <>
    <Header 
    setSelectedOptionMain={setSelectedOption}
    />
    
 </>
  );
}

export default App;
