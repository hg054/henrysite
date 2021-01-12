import React from 'react';
import './App.css';
import overview from './images/Shock/overview.JPG';
import shock from './images/Shock/Render.JPG';
import space from './images/1CMSPACE.JPG';
import vertSpace from './images/vertSpace.JPG';
function Shock() {

  return (
    <div>
        <h1>Shock Absorber</h1>
        <img src = {overview} width = "60%" alt = "overview" />
        <img src = {space} width = "90%" alt = "space" />
        <img src = {shock} width = "75%" alt = "shock-absorber" />
        <img src = {space} width = "90%" alt = "space" />
        <img src = {space} width = "90%" alt = "space" />
    </div>
  );
}

export default Shock;