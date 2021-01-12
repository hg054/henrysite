import {Link} from 'react-router-dom';
import React from 'react';
import './App.css';

function Projects() {

  const navStyle = {
    color: 'black' ,
    fontSize: 25,
    lineHeight: 3
};

  return (
    <div>
        <h1>
          Click on any of the following projects.
        </h1>
        <div>
          <Link style ={navStyle} to='/projects/cybertruck'>
            Tesla Cybertruck RC Model
          </Link>
        </div>
        <div>
          <Link style ={navStyle} to='/projects/hydraulic-cylinder'>
            Hydraulic Cylinder
          </Link>
        </div>
        <div>
          <Link style ={navStyle} to='/projects/shock-absorber'>
            Shock Absorber
          </Link>
        </div>
        <div>
          <Link style ={navStyle} to='/projects/cell-stand'>
            Cell Phone Stand
          </Link>
        </div>
        <div>
          <Link style ={navStyle} to='/projects/conveyor'>
            Conveyor System
          </Link>
        </div>

    </div>
  );
}

export default Projects;