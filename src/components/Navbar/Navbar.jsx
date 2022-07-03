import React, { Component } from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import {Link} from 'react-scroll'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experiences' smooth={true} >
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} >
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} >
                        <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} >
                <button className="button n-button" style={{color: darkMode ? 'black' : ''}}>Contact</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;