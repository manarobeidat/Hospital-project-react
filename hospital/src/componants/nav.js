import '../css/nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/contact us">Contact Us</Link>
        </li>
        
        <li>
          <Link to="/our doctors">Our Doctors</Link>
        </li>
        <li>
            <Link to="/our programs">Our Programs</Link>
        </li>
        <li> 
            <Link to="/who we are">Who We Are?</Link>
        </li>
          
      </ul>
    </nav>
  );
}
