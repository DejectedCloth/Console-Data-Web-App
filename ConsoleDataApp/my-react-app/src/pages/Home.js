import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConsoleGrid from '../components/ConsoleGrid';

export default function Home() {

    return(
        <div>
            <Navbar />
            <div className='grid'>
            <ConsoleGrid />
            </div>
            <Footer />
        </div>
    )
};