import React from 'react';
import './App.css';
import overview from './images/Hydraulic/overview.JPG';
import covered from './images/Hydraulic/Covered.JPG';
import uncovered from './images/Hydraulic/Uncovered.JPG';
import extcover from './images/Hydraulic/ExtendedCovered.JPG';
import extuncover from './images/Hydraulic/ExtendedUncovered.JPG';
import space from './images/1CMSPACE.JPG';
import vertSpace from './images/vertSpace.JPG';

function Hydraulic() {

  return (
    <div>
        <h1>Hydraulic Cylinder</h1>
        <img src = {covered} width = "75%" alt = "cover" />
        <img src ={overview}  width = "60%" alt="overview" />;
        <img src = {uncovered} width = "75%" alt = "cover" />
        <img src ={space} width="90%" alt ="space" />
        <img src = {extcover} width = "40%" alt = "cover" />
        <img src ={vertSpace} alt="vertical" />
        <img src = {extuncover} width = "40%" alt = "cover" />
        <img src ={space} width="90%" alt ="space" />
        <img src ={space} width="90%" alt ="space" />

    </div>
  );
}

export default Hydraulic;