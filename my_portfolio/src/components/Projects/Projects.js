import React from 'react';
import '../master.css';
import banner_img from './imgs/portfolio-website-header.jpg';
import "./Projects.css";

// console.log(banner_img);

function Projects() {
  return (
    <div align="center">
      {/* <img src={banner_img} className="banner" alt="my banner" /> */}

      {/* include the project picture gallery highlights here */}

      <h2>Projects</h2>

      <h3>Course projects</h3>

      <div align="left">
        <h4>Fluffle, Creative writing assistant</h4>
        <h4>Tootie, To-Do list application</h4>
        <h4>ARM-based Remote control vehicle</h4>
        <h4>Autonomous maze navigation robot</h4>
        <h4>Teleoperated SAR robot with 2D mapping</h4>
        <h4>Sound Based Entertainment System</h4>
      </div>
      
      
      <h3>Personal projects</h3>
      <div align="left">
        <h4>DeskTranslate</h4>
        <h4>Lifehack2020</h4>
        <h4>Shopee Product &amp; Design Challenge 2021</h4>
        <h4>Income Business Case Challenge</h4>
      </div>
    </div>
  )
}

export default Projects;
