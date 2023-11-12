import React from 'react';
import Navigationbar from "./Navigationbar";
import MainSection from "./MainSection";
import './BackgroundSection.css';

const BackgroundSection = () => {
    return (
        <section className='section'>
            <div className='bottom-section'>
                <div className='right-rectangle'></div>
                <div className='left-rectangle'></div>
            </div>
            <div className='top-section'>
                {/* Other content goes here */}
                <Navigationbar />
                <MainSection />
            </div>
        </section>

    );
}

export default BackgroundSection