import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink to="/" exact>
            Randy
          </NavLink>
          <NavLink to="/post">Blog Post</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/about">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
}
