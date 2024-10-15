import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="logo"><Link to="/">Home</Link></div>
            <ul className="menu-options">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/departments">Departments</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>

            </ul>
        </div>
    );
}

export default Navbar;
