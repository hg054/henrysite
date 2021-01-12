import React from 'react';
import './App.css';
import angle from './images/PhoneStand/angle.JPG';
import centremass from './images/PhoneStand/centreofmass.JPG';
import grabcad from './images/PhoneStand/grabcad.JPG';
import overview from './images/PhoneStand/overview.JPG';
import standing from './images/PhoneStand/Standing.JPG';
import stats from './images/PhoneStand/stats.JPG';
import package1 from './images/PhoneStand/package.JPG';
import space from './images/1CMSPACE.JPG';
import vertSpace from './images/vertSpace.JPG';

function Cell() {

  return (
    <div>
        <h1>Collapsible Cell Phone Stand</h1>
        <img src = {standing} width = "75%" alt = "render" />
        <img src = {overview} width = "75%" alt = "overview" />
        <img src = {centremass} width = "40%" alt = "centreOfMass" />
        <img src ={vertSpace} alt="vertical" />
        <img src = {package1} width = "40%" alt = "package" />
        <img src = {angle} width = "50%" alt = "angle" />
        <img src = {grabcad} width = "51%" alt = "grabcad" />
        <img src = {stats} width = "75%" alt = "statistics" />
        <img src ={space} width="90%" alt ="space" />
        <img src ={space} width="90%" alt ="space" />
    </div>
  );
}

export default Cell;