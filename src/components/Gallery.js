import React, { Component } from 'react';
import MediaCard from './MediaCard';
import './Gallery.css';


class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div >
    );
  }
}



export default Gallery;
