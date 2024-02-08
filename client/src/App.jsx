import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import pages and components
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import DiscInfo from './pages/DiscInfo';
import Learn from './pages/Learn';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/disc/:id" element={<DiscInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
