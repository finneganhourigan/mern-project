import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="flex justify-between gap-4 bg-background px-8 py-2 text-text">
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

            {/* <div class="grid grid-cols-2 justify-between px-8">
                <div class="hidden font-shippori text-3xl md:grid ">
                    <Link class="hidden bg-accent md:block" to="/">
                        <h1 class="">Logo</h1>
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
            </div> */}
        </header>
    );
};

export default Navbar;
