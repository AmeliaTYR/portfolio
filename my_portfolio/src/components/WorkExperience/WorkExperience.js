import React from 'react';
import '../master.css';
import banner_img from './imgs/portfolio-website-header.jpg';
import PhotoEntry from '../PhotoEntry';
import entries from '../data/work-experience.json';


// console.log(banner_img);

function WorkExperience() {
  return (
    <div>
      <img src={banner_img} className="banner" alt="my banner" />
      <div className="flex-container">
          {
            entries.itemlist.map((photo) =>
              { return <PhotoEntry key={photo.src} src={photo.src} location={photo.description} caption={photo.caption} /> }
            )
          }
        </div>
    </div>
  )
}

export default WorkExperience;
