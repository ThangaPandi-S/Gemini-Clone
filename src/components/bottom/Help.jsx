import { assets } from '../../assets/assets'
import './Help.css'
import {Link } from 'react-router-dom'
import Header from "../Header/Header"

const Help = () => {

  return (

    <div className='help'>
    
    <div className="help-container">


      <nav>
        <Link to="/home">
        <img src={assets.plus_icon} alt="" /></Link>
      <h1>Help</h1>
      </nav>

        <p>Here we try to solve your problems ,
            List your problem in the below section :
        </p>
        </div>
    </div>

  )
}

export default Help