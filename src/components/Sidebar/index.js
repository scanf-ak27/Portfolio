import './index.scss'
import LogoS from '../../assets/images/sidebar.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Sidebar=() =>(
   < div className='nav-bar'>
    <Link 
        className="logo" to='/'>
        <img src ={LogoS} alt ="logo"/>
        <img className="sub-logo" src ={LogoSubtitle} alt ="slobodan"/>
    </Link>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
    <nav>  
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#f8f3f3"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#f8f3f3"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#f8f3f3"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aayush-kumar-43b175136/"  className="social"
               >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank"
               rel="noreferrer"
               href="https://github.com/scanf-ak27" 
               >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank"
               rel="noreferrer"
               href="https://www.instagram.com/aayush__27/?next=%2F" 
               >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank"
               rel="noreferrer"
               href="https://wa.me/8521187429" 
               >
                <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
   </div>
)

export default Sidebar