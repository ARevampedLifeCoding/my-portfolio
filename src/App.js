import React from "react";
// import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
    <NavBar/>
        <Route element={Home} path ="/" exact />
        <Route element={About} path ="/about"/>
        <Route element={SinglePost} path= "/post/:slug"/>
        <Route element={Post} path = "/post"/>
        <Route element={Project} path = "/project"/>
     
    </Router>
  );
}


export default App;

//https://www.freecodecamp.org/news/build-portfolio-website-react/
//https://dev.to/danhjoo7/using-a-switch-component-in-react-router-d2k
//https://www.freecodecamp.org/news/react-router-cheatsheet/
