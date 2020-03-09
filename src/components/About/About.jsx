import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './style.css';

const myPic = process.env.PUBLIC_URL + '/assets/me.jpeg';
const resume = process.env.PUBLIC_URL + '/assets/Jonathan_Mack_Resume.pdf';

function About() {
    return(
        <Container id='about'>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Image className='wow fadeInLeft' data-wow-offset="100" data-wow-delay="0.5s" src={myPic} roundedCircle/>
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <p className='wow fadeInDown' data-wow-offset="100" data-wow-delay="0.5s">Carleton University</p>
                    <p className='wow fadeInDown' data-wow-offset="100" data-wow-delay="0.5s">3rd year Software Engineering undergraduate</p>
                    <p className='wow fadeInDown' data-wow-offset="100" data-wow-delay="0.5s">Mobile | Web</p>
                    <p className='wow fadeInDown' data-wow-offset="100" data-wow-delay="0.5s">A proud supporter of the Android master race</p>
                    <a href={resume} target='_blank' rel="noopener noreferrer">
                        <Button variant='outline-dark' className='wow fadeInDown' data-wow-offset="100" data-wow-delay="0.5s">View Resume</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;