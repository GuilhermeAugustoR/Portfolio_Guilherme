/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        GARC
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin />
        </a>
        <a href="http://github.com" target="_blank" rel="noreferrer">
          <AiOutlineGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; GARC. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
