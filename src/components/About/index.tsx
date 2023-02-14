/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./styles.css";
import { FaAward } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={require("../../assets/me.jpg")} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about_card">
              <BsFolderCheck className="about_icon" />
              <h5>Experience</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello! My name is Guilherme Augusto, I have a bachelor's degree in
            Information Systems from Faculdade Cotemig. I've been studying
            programming since I was 15. I like to program in React
          </p>

          <a href="#contact" className="btn btn_primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
