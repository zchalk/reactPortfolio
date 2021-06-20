import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Work') {
            return <Work />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div className="React-Container">
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
        <div className='Body-Container'>
        {renderPage()}
        </div>
        <Footer />
        </div>
    )
}