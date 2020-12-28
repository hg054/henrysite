import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Projects() {

  return (
    <div>
        <h1>
          <Link to='/projects/hydraulic-cylinder'>
            Hydraulic Cylinder
          </Link>
        </h1>
        <h1>
          <Link to='/projects/project2'>
            Project 2
          </Link>
        </h1>
        <h1>
          <Link to='/projects/project3'>
            Project 3
          </Link>
        </h1>
        <h1>
          <Link to='/projects/project4'>
            Project 4
          </Link>
        </h1>
        <h1>
          <Link to='/projects/project5'>
            Project 5
          </Link>
        </h1>

        <h1>
          <Link to='/projects/borger'>
            Borger 3.50
          </Link>
        </h1>

        <h1>
          <Link to='/projects/sosig'>
            Sosig Edited
          </Link>
        </h1>
    </div>
  );
}

export default Projects;