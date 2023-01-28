import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header_socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <AiOutlineLinkedin size={26} />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <AiOutlineGithub size={26} />
      </a>
    </div>
  );
};

export default Socials;
