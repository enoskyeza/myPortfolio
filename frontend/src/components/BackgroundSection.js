import React from 'react';
import Container from 'react-bootstrap/Container'
import Navigationbar from "./Navigationbar";
import MainSection from "./MainSection";
import './BackgroundSection.css';


const BackgroundSection = () => {
    return (
        <Container className='section-' fluid>
            <div className='bottom-section'>
                <div className='right-rectangle'></div>
                <div className='left-rectangle'></div>
            </div>
            <div className='top-section'>
                <div className='nav-section-menu'><Navigationbar /></div>
                <MainSection />
            </div>
        </Container>
    );
}

export default BackgroundSection