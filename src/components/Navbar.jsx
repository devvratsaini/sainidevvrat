import React from "react";
import logo from "../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://drive.google.com/file/d/1xGi11ADmiLOwZ50BWDYI5uZzM7rxwu7P/view?usp=sharing" target="_blank">
          <btn className="hover:text-purple-700 hover:border-purple-700 cursor-pointer border-2 border-black px-2 py-1 bg-gradient-to-bl from-purple-200 to-cyan-200">
            {" "}
            My Resume
          </btn>
        </a>
        <a href="https://www.linkedin.com/in/devvratsaini/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/devvratsaini" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
