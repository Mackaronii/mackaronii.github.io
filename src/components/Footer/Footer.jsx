import React from 'react';
import './style.css';

function Footer() {
    return(
        <footer id="links">
            <p>
                <a className="home-btn" href='#home'>
                    <span className='fas fa-chevron-up fa-2x'/>
                </a>
            </p>
            <p>
                <a className='github-btn' href='https://github.com/Mackaronii' target='_blank' rel="noopener noreferrer">
                    <span className="fab fa-github-alt fa-3x"/>
                </a>
                <a className='linkedin-btn' href='https://www.linkedin.com/in/jedmack/' target='_blank' rel="noopener noreferrer">
                    <span className="fab fa-linkedin-in fa-3x"/>
                </a>
            </p>
            <p><b>Jonathan Mack 2020</b></p>
            <p style={{color:'#BBBBBB'}}><i>Powered by GitHub Pages | Built with React Bootstrap and wow.js</i></p>
        </footer>
    );
}

export default Footer;