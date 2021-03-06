import React from "react";
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl cursive tracking widest"
          >
            Randy
          </NavLink>
          {/* <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 "
            activeClassName="text-red-100 bg-green-700"
          >
            Blog Post
          </NavLink> */}
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 "
            activeClassName="text-red-100 bg-green-700"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 "
            activeClassName="text-red-100 bg-green-700"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800  "
            activeClassName="text-red-100 bg-green-700"
          >
            Contact Me
          </NavLink>
          <NavLink
            to="/resume"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl cursive tracking widest"
          >
            Resume
          </NavLink>
          
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/randylangston/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/ARevampedLifeCoding"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/arevampedcoding"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
