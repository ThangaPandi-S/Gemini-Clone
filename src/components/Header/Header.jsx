import { assets } from "../../assets/assets"
import './Header.css'

const Header = () => {

  return (
    <div className="header">
        <nav >
        <p>Promptly.io</p>
        {/* <div  className="theme">
        <img src={assets.bulb_icon} alt="" />
        </div> */}
        <img src={assets.MyUser_icon} alt="" />
      </nav>
    </div>
  )
}

export default Header;