import React from "react";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './MainSection.css';
import profile from '../images/profile.jpeg'

const MainSection = () => {
    return (
            <Row className='main-section'>
                <Col md={4} className='image-container'>
                    {/*<Image src={profile} />*/}
                </Col>
                <Col md={7} className='biography-info'>
                        <h2><span className='name-el'>I'M STEVE MILNER.</span> WEB DESIGNER</h2>
                        <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean
                            & user‑friendly experiences, I am passionate about building excellent software that
                            improves the lives of those around me. </p>
                        <Button variant="outline-warning">MORE ABOUT ME</Button>
                </Col>
            </Row>
    );
}

export default MainSection