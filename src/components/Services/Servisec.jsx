import React, { Component } from "react";
import "./Services.css";
import Card from "../Cards/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: "1", type: "spring" };
  return (
    <div className="services" id="Services">
      {/* left-side */}
      <div className="awesome">
        <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>

        <span>services</span>
        <span style={{color: darkMode ? 'white' : ''}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Iusto eius officiis ipsa! Doloribus molestias placeat ad. <br />
          Sit tempora fugiat ipsa animi ullam incidunt vel aliquam error,
          inventore nam sed corporis!
        </span>
        <a href={Resume} download>
          <button className="button s-button" style={{width:'9rem'}}>Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94", left: "-18rem", top: "13rem" }}
        ></div>
      </div>
      {/* right-side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "25rem" }}
          initial={{ left: "40rem" }}
          transition={transition}
          style={{ left: "18rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Scetch, Photoshop , Adobe , Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "15rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript , react"}
          />
        </motion.div>
        {/* 3th card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
          style={{ top: "22rem", left: "14rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet, consectetur"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
