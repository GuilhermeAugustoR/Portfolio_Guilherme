import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header_socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <AiOutlineLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default Socials;
