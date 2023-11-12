import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                <Row className='top-section'>
                    <Col xs={8}>
                        <MainSection />
                    </Col>
                    <Col>
                        <Navigationbar />
                    </Col>
                </Row>
        </section>

    );
}

export default BackgroundSection