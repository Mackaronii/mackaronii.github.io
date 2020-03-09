import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './style.css';

function Jumbo() {
    return(
        <Jumbotron id="home" fluid>
            <Container>
                <div>
                    <h1 className='wow fadeInUp' data-wow-duration="2s" data-wow-delay="1s">Hi, I'm Johnny.</h1>
                    <p className='wow fadeInUp' data-wow-duration="2s" data-wow-delay="2s">This website was made with React Bootstrap.</p>
                    <Button variant='outline-light' size='lg' href='#about' className='wow fadeInUp' data-wow-duration="2s" data-wow-delay="3s">About</Button>
                </div>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;