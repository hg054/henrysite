import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Borger from './Borger';
import Sosig from './Sosig';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/about" exact component={About}/>
        <Route path="/shop" exact component = {Shop} />
        <Route path="/shop/borger" exact component = {Borger}/>
        <Route path="/shop/sosig" exact component = {Sosig} />
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
