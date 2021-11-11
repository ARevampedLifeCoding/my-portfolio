import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route component= {Home} path="/" exact />
        <Route component= {About} path="/About" />
        <Route component= {SinglePost} path="/post/:slug" />
        <Route component= {Post} path="/post" />
        <Route component= {Project} path="/project" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
