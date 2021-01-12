import React from 'react';
import './App.css';
import Nav from './Nav';
import Resume from './Resume';
import Projects from './Projects';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Borger from './Borger';
import Sosig from './Sosig';
import Cybertruck from './Project1';
import Hydraulic from './Project2';
import Shock from './Project3';
import Cell from './Project4';
import Conveyor from './Project5';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/henrysite" exact component = {Home} />
        <Route path="/" exact component = {Home} />
        <Route path="/resume" exact component={Resume}/>
        <Route path="/projects" exact component = {Projects} />
        <Route path="/projects/cybertruck" component = {Cybertruck} />
        <Route path="/projects/hydraulic-cylinder" component = {Hydraulic} />
        <Route path="/projects/shock-absorber" component = {Shock} />
        <Route path="/projects/cell-stand" component = {Cell} />
        <Route path="/projects/conveyor" component = {Conveyor} />
        <Route path="/projects/borger" exact component = {Borger}/>
        <Route path="/projects/sosig" exact component = {Sosig} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>About Me</h1>
      <h2>Self-Motivated, Team-Minded, Leader</h2>
      <h3>Student at UWaterloo's Mechatronics Engineering interested in everything hardware.</h3>
  </div>
);

export default App;
