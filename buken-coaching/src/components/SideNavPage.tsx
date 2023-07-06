import { useState } from "react";

function SideNavPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOpetion, setSelectedOption] = useState("Home");

  const menuOptions = [
    "Home",
    "About Me",
    "Coaching"
  ]

  const handleOpenMenu = (event: any) => {
    setIsOpen(!isOpen);
  };


  return(
  <section className="flex gap-6 justify-end lg:col-start-12 sm:col-start-9 col-end-13 col-span-4">
    <div className={`bg-[#0e0e0e] 
    ${isOpen ? "w-60 min-h-screen" : "w-16 bg-transparent" 
    } duration-500 text-gray px-4 ` }>
      <div className="py-3 flex justify-end"
      onClick={handleOpenMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFFFFF"
          className="cursor:pointer self-center hover:opacity-50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 relative mt-4">
          {menuOptions.map((option) => (
            <div
              className={`flex items-center gap-4 cursor-pointer ${
                selectedOpetion === option && "text-[#FFC107]"
              }`}
              onClick={() => {setSelectedOption(option); console.log(option)}}
            >
              <div className="w-4 h-4 bg-[#FFC107] text-[#FFFF] rounded-full"></div>
              <h2 className="bg-[#FFFF]">{option}</h2>
              

              </div>
            ))}

          </div> 
          )
          
            }
    </div>
  </section>
  )
}

export default SideNavPage;
