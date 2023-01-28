import React from "react";
import "./styles.css";
import Button from "./components/Button";
// import { Img } from "react-image";
import Socials from "./components/Socials";
import Lottie from "react-lottie";
import animationData from "../../assets/sphere.json";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <header className="container header_container">
      <h5>Hi, I'm</h5>
      <h1>Guilherme Augusto</h1>
      <h5 className="text-light">Front-end Developer</h5>
      <Button />

      <Socials />

      <div className="me">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>

      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
