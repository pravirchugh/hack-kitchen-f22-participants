import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages';
import About from './pages/about';
import Awards from './pages/awards';
import Gallery from './pages/gallery';



function App() {
    return (

        <div id="navigation">
            
            <Router>
                <div>
                    <Navbar />
                </div>
                <br></br>
                
            <div>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </div>
              
            </Router>
        </div>

        
    );
}

export default App;
