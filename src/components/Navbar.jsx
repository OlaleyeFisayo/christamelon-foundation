import "./Navbar.scss";
import logo from "../assets/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { myContent } from "../context/context";

export default function Navbar() {
  const {toggle, showNavBar, hideNavBar} = useContext(myContent)

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className={(isActive) => (isActive ? "active" : "")} to=".">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={(isActive) => (isActive ? "active" : "")} to="about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive ? "active" : "")}
            to="whatwedo"
          >
            What We Do
          </NavLink>
        </li>
        <li>
          <NavLink className={(isActive) => (isActive ? "active" : "")} to="media">
            Media
          </NavLink>
        </li>
        <li>
          <NavLink className={(isActive) => (isActive ? "active" : "")} to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="donation" className="donate-button">
        Donate
      </Link>

      <div className="hamburger-menu" onClick={showNavBar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`mobile-view ${toggle ? "show" : ""}`}>
        <div className="x" onClick={hideNavBar}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
        <ul>
          <li>
            <Link onClick={hideNavBar} to=".">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={hideNavBar} to="about">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={hideNavBar} to="whatwedo">
              What We Do
            </Link>
          </li>
          <li>
            <Link onClick={hideNavBar} to="media">
              Media
            </Link>
          </li>
          <li>
            <Link onClick={hideNavBar} to="contact">
              Contact
            </Link>
          </li>
        </ul>
        <Link onClick={hideNavBar} to="donation" className="mobile-donate">
          Donate
        </Link>
      </div>
    </nav>
  );
}
