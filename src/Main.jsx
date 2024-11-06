import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function Main() {
    return (
    <>
    <Nav />
    <Home />
    <About />
    <Services />
    <Tours />
    <Footer />
    </>
    );
}

export default Main;