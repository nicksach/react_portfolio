import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoBear from '../../assets/images/bear.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {

    return (
    <div className="nav-bar">
        <Link className="logo" to="/react_portfolio">
            <img src={LogoBear} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/react_portfolio" end>
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/react_portfolio/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/react_portfolio/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/react_portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nick-satriano-1225aab6/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/nicksach">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar