import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)