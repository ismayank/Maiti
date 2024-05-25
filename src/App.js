import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
//import About from './components/About';
import Banner from './components/Banner';
import Container from './components/Container';

function App() {
    return (
        <Router>
          <Banner />
          <Container />
            <Home/>
            <Routes>
                <Route path="/" element={<r />} />
            </Routes>
        </Router>
    );
}

export default App;
