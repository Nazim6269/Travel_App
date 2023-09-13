import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  //function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //fuction to remove navBar
  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel
            </h1>
          </a>
        </div>
        <div className={active}>
          <div>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Packages
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Shop
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  About
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Pages
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  News
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              <button className="btn">
                <a href="#">BOOK NOW</a>
              </button>
            </ul>
            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
