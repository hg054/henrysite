import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Borger from './Borger';
import Sosig from './Sosig';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/henrysite" exact component = {Home} />
        <Route path="/" exact component = {Home} />
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component = {Projects} />
        <Route path="/projects/hydraulic-cylinder" component = {Project1} />
        <Route path="/projects/project2" component = {Project2} />
        <Route path="/projects/project3" component = {Project3} />
        <Route path="/projects/project4" component = {Project4} />
        <Route path="/projects/project5" component = {Project5} />
        <Route path="/projects/borger" exact component = {Borger}/>
        <Route path="/projects/sosig" exact component = {Sosig} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
