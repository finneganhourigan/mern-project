import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="sticky top-0 flex justify-between gap-4 bg-background px-8 py-2 text-text">
            <Link to="/" class="font-shippori text-xl md:block">
                Logo
            </Link>

            <div class="flex space-x-8 whitespace-nowrap">
                <Link to="/" class="font-shippori text-xl">
                    Home
                </Link>
                <Link to="/about" class="font-shippori text-xl">
                    About
                </Link>
                <Link to="/build" class="font-shippori text-xl">
                    Bag Builder
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
