import React from 'react';
import './App.css';
import bw1 from './images/bw1.jpg';
import overView from './images/testName.JPG';
import supplies from './images/supplies.JPG';
import base from './images/base.JPG';
import frames from './images/frames.JPG';
import circuit1 from './images/circuit1.JPG';
import circuit2 from './images/circuit2.JPG';
import assembly from './images/AssemblyRender.JPG';
import assemblyUnc from './images/AssemblyUncoveredRender.JPG';
import bwUnc from './images/RealOrthoUncovered.jpg';
import space from './images/1CMSPACE.JPG';
import vertSpace from './images/vertSpace.JPG';

function Cybertruck() {

  return (
    <div>
        <h1>Tesla Cybertruck RC Model</h1>
        <img src ={bw1} width="1000" alt="orthographic" />
        <img src ={overView} width = "60%" alt="overview" />
        <img src ={supplies} width = "60%" alt="supplies" />
        <img src ={base} width = "60%" alt="base" />
        <img src ={frames} width = "60%" alt="frames" />
        <img src ={circuit1} width = "60%" alt="circuit1" />
        <img src ={circuit2} width = "60%" alt="circuit2" />
        <img src ={assembly} width = "41%" alt="assemblyRender" />
        <img src ={vertSpace} alt="vertical" />
        <img src ={assemblyUnc} width = "41%" alt="assemblyUncoveredRender" />
        <img src ={bw1} width="40%" alt="orthographic" />
        <img src ={vertSpace} alt="vertical" />
        <img src ={bwUnc} width="40%" alt ="pls" />
        <img src ={space} width="90%" alt ="space" />

    </div>
  );
}

export default Cybertruck;