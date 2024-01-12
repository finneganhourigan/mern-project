import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <header >
        <div class='flex justify-center text-text bg-primary p-4 text-3xl font-shippori'>
            <Link to='/'>
              <h1>Logo</h1>
            </Link>
        </div>
      </header>
    )
}

export default Navbar;