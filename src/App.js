import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const SinglePost = lazy(() => import('./components/SinglePost'));
const Post = lazy(() => import('./components/Post'));
const Project = lazy(() => import('./components/Project'));
const NavBar = lazy(() => import('./components/NavBar'));

const App = () => (
  
  <Router>
    
    <Suspense fallback={<div>Loading...</div>}>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/post:slug" component={SinglePost}/>
        <Route path="/post" component={Post}/>
        <Route path="/project" component={Project}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;

//https://www.freecodecamp.org/news/build-portfolio-website-react/
//https://dev.to/danhjoo7/using-a-switch-component-in-react-router-d2k
//https://www.freecodecamp.org/news/react-router-cheatsheet/