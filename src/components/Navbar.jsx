import { useState, Fragment } from "react";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import PropTypes from "prop-types";
import "../styles/navbar.css";

const Navbar = ({ toggle }) => {
  const [toggleNav, setToggleNav] = useState(false);

  //prevent scroll
  toggleNav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  Navbar.propTypes = {
    toggle: PropTypes.func,
  };

  return (
    <Fragment>
      <nav className="primary-nav">
        <i
          onClick={() => setToggleNav(!toggleNav)}
          className={!toggleNav ? "bars" : "close"}
        >
          {!toggleNav ? (
            <HiOutlineBars3 className="nav-icon" />
          ) : (
            <HiOutlineXMark className="nav-icon" />
          )}
        </i>
        <div className="logo-wrapper">
          <NavLink to="/">
            <h3 className="logo">Blog Home & Garden</h3>
            <p className="logo-desc">A century of love for home and garden</p>
          </NavLink>
        </div>
        <ul className="nav-list">
          <li className="nav-li">
            <p>Username</p>
          </li>
          <li className="nav-li">
            <div className="nav-li-wrapper">
              <NavLink to="/login">Login</NavLink>
            </div>
          </li>
          <li className="nav-li">
            <div className="nav-li-wrapper">
              <NavLink to="/write">Write</NavLink>
            </div>
          </li>
          <li className="nav-li">
            <div className="nav-li-wrapper" onClick={toggle}>
              <p>Newsletter</p>
            </div>
          </li>
        </ul>
        <div
          className={
            !toggleNav ? "links-content-wrapper" : "links-content-wrapper show"
          }
        >
          <NavLinks className="links-content" />
        </div>
      </nav>
      {toggleNav && <div className="backdrop"></div>}
    </Fragment>
  );
};

export default Navbar;
