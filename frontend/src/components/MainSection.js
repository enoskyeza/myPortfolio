import React from "react";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from 'react-icons/io';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './MainSection.css';

const MainSection = () => {
    return (
            <Row className='main-section'>
                <Col md={4} className='image-container'>
                    {/*<Image src={profile} />*/}
                </Col>
                <Col md={7} className='biography-info'>
                    <h2><span className='name-el'>I'M STEVE MILNER.</span></h2>
                    <h2>WEB DESIGNER</h2>
                        <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean
                            & user‑friendly experiences, I am passionate about building excellent software that
                            improves the lives of those around me. </p>
                        <button className="custom-button">
                            MORE ABOUT ME
                        </button>
                </Col>
            </Row>
    );
}

export default MainSection