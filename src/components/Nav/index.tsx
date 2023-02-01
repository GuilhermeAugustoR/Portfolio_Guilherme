/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css";

import { BiHomeAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { GiBlackBook } from "react-icons/gi";
import { TbMessageLanguage } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Nav = () => {
  const [active, setActive] = React.useState<string>("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <HiOutlineClipboardDocumentList />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <GiBlackBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <TbMessageLanguage />
      </a>
    </nav>
  );
};

export default Nav;
