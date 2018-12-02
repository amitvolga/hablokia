import React, { Component } from 'react';
import MediaCard from './MediaCard';
import './Gallery.css';
import MediaCardProperties from '../MediaCardProperties.json'


class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      mediaCardProperties: MediaCardProperties
    }
  }

  render() {
    return (
      <div className="gallery">
        {this.state.mediaCardProperties.map(item =>
          <MediaCard
            cardSubject={item.cardSubject}
            cardDescription={item.cardDescription}
            cardImagePath={item.cardImagePath} />
        )
        }
        {/* <div>

          <MediaCard
            cardSubject={this.state.cardSubject}
            cardDescription={this.state.cardDescription}
            cardImagePath={this.state.cardImagePath} />
        </div>
        <div>

          <MediaCard
            cardSubject={this.state.cardSubject}
            cardDescription={this.state.cardDescription}
            cardImagePath={this.state.cardImagePath} />
        </div> */}
      </div>
    );
  }
}

export default Gallery;
