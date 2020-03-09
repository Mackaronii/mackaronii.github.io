import React from 'react';
import Container from 'react-bootstrap/Container';

function Contact() {

    const containerStyle = {
        paddingTop: '50px',
        paddingBottom: '50px'
    }

    return(
        <Container id='contact' style={containerStyle}>
            <h2>Contact Me</h2>
        </Container>
    );
}

export default Contact;