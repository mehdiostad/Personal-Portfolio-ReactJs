import React, { Component } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instaram from "../../img/instagram.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import {themeContext} from '../../Context'
import { useContext } from "react";
import {Link} from 'react-scroll'
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: "2", type: "Spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode ? 'white' : ''}}>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span style={{color: darkMode ? 'white' : ''}}>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
        <button className="button i-button" style={{color: darkMode ? 'black' : ''}}>Hire me</button>
        </Link>
        <div className="i-icons">
          
          
          <a href="https://www.github.com/" target='_blank'>
          <img src={Github} alt="" />
            </a>
          <a href="https://www.lenkedin.com/" target='_blank'>
          <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/" target='_blank'>
          <img src={Instaram} alt="" />
          </a>
          
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "45%" }}
          transition={transition}
          className="floating-div"
          style={{ top: "-4%", left: "48%" }}
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer!" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ top: "18rem", left: "-2rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
