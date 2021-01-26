import React from 'react';
import './master.css';
import banner_img from './Banner/portfolio-website-header.png';

// console.log(banner_img);

function BannerImage() {
  return (
    <div>
      <img src={banner_img} className="banner" alt="my banner" />
    </div>
  )
}

export default BannerImage;
