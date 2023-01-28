/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Img } from "react-image";
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
            <Img
              alt="me"
              src={
                "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              }
            />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo
            eius autem saepe ut quas nisi beatae reprehenderit aut nulla
            voluptates molestias soluta velit sed totam, nihil voluptatum et
            ullam.
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
