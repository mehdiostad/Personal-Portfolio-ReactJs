import React, { Component } from 'react';
import './Experiences.css'
import { themeContext } from "../../Context";
import { useContext } from "react";
const Experiences = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className='experience' id='Experiences'>
            <div className="achivement">
                <div className='circle'style={{color: darkMode?'var(--orange)':''}}>+8</div>
                <span style={{color: darkMode?'white':''}}>Years</span>
                <span>Experience</span>
            </div>

       
            <div className="achivement">
                <div className='circle' style={{color: darkMode?'var(--orange)':''}}>+20</div>
                <span>Completed</span>
                <span>Projects</span>
               
                </div>

            <div className="achivement">
                <div className='circle' style={{color: darkMode?'var(--orange)':''}}>+5</div>
                <span>Companies</span>
               <span>work</span>
               
                </div>

        </div>

     );
}
 
export default Experiences;