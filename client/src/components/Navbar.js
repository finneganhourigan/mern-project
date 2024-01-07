import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <header>
        <div className="navbar">
            <Link to='/'>LOGO</Link>
        </div>
      </header>
    )
}

export default Navbar;