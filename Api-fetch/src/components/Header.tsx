import { NavLink, Link} from "react-router-dom";
import Logo from "../assets/images/icon/Test_logo-01.svg";

interface HeaderProps {
 }

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="main_nav">
      <div className="container">
        <div className="nav_row">
          <div className="web-logo">
            <Link to="/">
              <img src={Logo} alt="Logo image" />
            </Link>
          </div>
          <div className="web-links">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Login" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
