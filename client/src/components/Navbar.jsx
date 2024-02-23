import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="sticky top-0 z-10 flex justify-between gap-4 bg-background px-2 py-2 text-text sm:px-8">
            <Link
                to="/"
                class="flex items-center font-shippori text-xl md:block"
            >
                <img class="w-full" src="/assets/logo.svg" alt="logo" />
            </Link>

            <div class="flex space-x-4 whitespace-nowrap md:space-x-8">
                <Link to="/" class="font-shippori text-xl">
                    About
                </Link>
                <Link to="/learn" class="font-shippori text-xl">
                    Learn
                </Link>
                <Link to="/discs" class="font-shippori text-xl">
                    Discs
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
