import LogoRectangle from '../static/Buken_Coaching_Logo_Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="grid grid-cols-12 grid-rows-1 content-center bg-primary h-[10vh]">
        <img src={LogoRectangle} alt="Buken Coaching Logo" className="h-[10vh] col-span-5"/>
        <FontAwesomeIcon icon={faBarsStaggered} 
        style={{color: "#FFFFFF",}} 
        className="col-start-10 col-end-12 col-span-2 h-[8vh] self-center hover:bg-neutral1/50"/>
        </div >
    )
}

export default Header;