import React, { Component } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: "3.5", type: "spring" };
  return (
    <div className="works">
      {/* left side */}
      <div className="w-lef">
        <div className="awesome">
          <span style={{color : darkMode ? 'white' : ''}}>Works for All these</span>
          <span>Brands & Clients</span>
          <span style={{color : darkMode ? 'white' : ''}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Iusto eius officiis ipsa! Doloribus molestias placeat ad. <br />
            Sit tempora fugiat ipsa animi ullam incidunt vel aliquam error,
            inventore nam sed corporis!
          </span>

          <button className="button s-button">Hire Me</button>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94", left: "-18rem", top: "13rem" }}
          ></div>
        </div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transition}
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          {/* background circles */}
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
