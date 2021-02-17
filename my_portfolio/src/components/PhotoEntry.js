import React from 'react';
import './master.css';
import ContentAreaContext from './ContentAreaContext';
import colorPallet from './WorkExperience/imgs/color-ref-pallet.png'

// import pictu from './WorkExperience/imgs'

//...snip




class PhotoEntry extends React.Component {

  static contextType = ContentAreaContext;

  render() {

    const image_path = "./WorkExperience/imgs/" + this.props.src;

    return (

        <div className="photo-entry-block" >
            <a href={image_path}>
                <img className="photo-img" src={image_path} alt={image_path} />
            </a>
            {/* { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)}; */}
            {/* <img src={images['1'].} alt={images['color-ref-pallet.png']} /> */}

            <div className="photo-caption">{this.props.caption}</div>
            <div className="photo-info">{this.props.location}</div>
            { this.context.userName !== "" &&
                <div className="photo-comment">Commenting as: {this.context.userName} <input type="text" placeholder="comment"/></div>
             }
        </div>

    );

  }

}

export default PhotoEntry;
