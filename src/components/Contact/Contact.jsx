import React, { Component, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {themeContext} from '../../Context'
import { useContext } from "react";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yanp8tp",
        "template_xx9kgb4",
        form.current,
        "YnbL602uZPbnUETzQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id="Contact">
      {/* left side */}
      <div className="w-lef">
        <div className="awesome">
          <span style={{color: darkMode ? 'white': ''}}>Get in touch</span>
          <span>Contact me</span>
          <span style={{color: darkMode ? 'white': ''}}>
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
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "thanks for your massage!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
