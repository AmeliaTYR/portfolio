import React from 'react';
import '../master.css';
import banner_img from './imgs/portfolio-website-header.jpg';

// console.log(banner_img);

function PersonalStatement() {
  return (
    <div>
      <img src={banner_img} className="banner" alt="my banner" />
    </div>
  )
}

export default PersonalStatement;
