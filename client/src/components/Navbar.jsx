import {Link} from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
      <header>
        <div className="navbar">
            <Link to='/'>
              <h1>Logo</h1>
            </Link>
        </div>
      </header>
    )
}

export default Navbar;