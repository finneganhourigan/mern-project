import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="bg-primary text-text">
            <div class="grid grid-cols-3 justify-center p-4">
                <div class="font-shippori text-3xl ">
                    <Link class="hidden md:block" to="/">
                        Logo
                    </Link>
                </div>
                <nav class="flex justify-center space-x-8 whitespace-nowrap">
                    <Link to="/" class="font-shippori text-3xl">
                        Home
                    </Link>
                    <Link to="/about" class="font-shippori text-3xl">
                        About
                    </Link>
                    <Link to="/build" class="font-shippori text-3xl">
                        Bag Builder
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
