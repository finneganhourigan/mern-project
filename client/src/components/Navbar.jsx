import {Link} from 'react-router-dom'

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