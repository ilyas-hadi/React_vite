import { Link } from 'react-router-dom';
import Logo from '../assets/images/icon/Test_logo-01.svg';

function Header() {
  return (
    <>
    <div className="main_nav">
        <div className="container">
            <div className="nav_row">
                <div className="web-logo"><img src={Logo} alt="Logo image" /></div>
                <div className="web-links">
                    <ul>
                        <li>
                           <Link to='/'>Home</Link>
                        </li>
                        <li>
                           <Link to='about-us'>About Us</Link>
                        </li>
                        <li>
                           <Link to='contact-us'>Contact Us</Link>
                        </li>
                        <li>
                           <Link to='services'>Services</Link>
                        </li>
                        <li>
                          <Link to='Login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


Header.propTypes = {

}

export default Header;

