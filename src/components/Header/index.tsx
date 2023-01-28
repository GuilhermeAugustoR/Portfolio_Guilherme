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
        {/* <Img
          alt="me"
          src={
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          }
        /> */}
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>

      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
