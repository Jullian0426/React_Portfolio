import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

// Display the Navbar and the appropriate content depending on the route
function Header() {
    return (
        <Router>
            <Navigation />

            <div className='container' id='container'>
                <Routes>
                    <Route
                        path="/React_Portfolio/"
                        element={<About />}
                    />
                    <Route
                        path="/React_Portfolio/about"
                        element={<About />}
                    />
                    <Route
                        path="/React_Portfolio/portfolio"
                        element={<Portfolio />}
                    />
                    <Route
                        path="/React_Portfolio/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/React_Portfolio/resume"
                        element={<Resume />}
                    />
                </Routes>
            </div>
        </Router>
    )
};

export default Header;