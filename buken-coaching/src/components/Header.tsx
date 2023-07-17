import LogoRectangle from '../static/Buken_Coaching_Logo_Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

interface HeaderProps {
  setSelectedOptionMain: (option: string) => void;
}

function Header( {setSelectedOptionMain}: HeaderProps ) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");

  const menuOptions = [
    {id: 0, name: "Home"},
    {id: 1, name: "¿Quien soy?"},
    {id: 2, name: "Sobre mi Coaching"},
    {id: 3, name: "Coaching Form"},
    {id: 4, name: "Agenda una consulta gratis"},
    {id: 5, name: "Preguntas Frecuentes"}
  ]

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-40 grid grid-cols-12 grid-rows-1 content-center bg-success h-[10vh]">
      <img
        src={LogoRectangle}
        alt="Buken Coaching Logo"
        className="h-[10vh] col-span-5"
        />
      {<FontAwesomeIcon
        icon={faBarsStaggered}
        style={{ color: "#FFFFFF", }}
        className="lg:col-start-12 sm:col-start-12 col-end-12 h-[5vh] self-center hover:bg-info-600"
        onClick={() => setIsOpen(!isOpen)}
        />}
    </div>
      <section className={`flex flex-col gap-4 fixed top-[10vh] w-full bg-secondary-900 
      ${isOpen ? "h-[32vh] text-white " : "h-0 bg-transparent text-transparent decoration-transparent"} duration-500  px-4`}>
        { isOpen && (
          <div className="flex flex-col gap-4 relative mt-4">
            {menuOptions.map((option) => (

              <div
                className={`flex items-center gap-4 cursor-pointer ${
                  selectedOption === option.name && "decoration-success underline underline-offset-2"
                }`}
                onClick={() => {setSelectedOptionMain(option.name); setSelectedOption(option.name); setIsOpen(false);}}
                key={option.id}
              >
                <h2 className=" ">{option.name}</h2>
              </div>
            ))}
          </div>

        )}
    
      </section>

        </>
  );
}

export default Header;
