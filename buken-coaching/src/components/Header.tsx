import LogoRectangle from '../static/Buken_Coaching_Logo_Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");

  const menuOptions = [
    "Home",
    "About Me",
    "Coaching"
  ]

  return (
    <>
    <div className="grid grid-cols-12 grid-rows-1 content-center bg-success h-[10vh]">
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
    {isOpen && (
      <section className={`flex flex-col gap-4 relative bg-secondary-900 
      ${isOpen ? "h-52" : "h-0"} duration-500 text-primary px-4`}>

    
      </section>
    )}

        </>
  );
}

export default Header;
