import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 md:w-3/4 mx-auto sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to={"/"}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/projects"}>Projects</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/applied-jobs"}>Skills</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/blog"}>Contact</ActiveLink>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-2xl" href="#">
          Fattah_<span className="text-primary">Samit</span>
        </a>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="#">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/projects"}>Projects</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/applied-jobs"}>Skills</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/blog"}>Contact</ActiveLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
