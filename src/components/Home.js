
import React, { Component } from 'react';
import img from '../newYork_homePage.jpg';
import './Home.css';
import MediaCard from './MediaCard';

class home extends Component {
  constructor() {
    super();
    this.state = {
      cardSubject: 'newyork',
      cardDescription: 'city',
      cardImagePath: 'C:/Users/avishay/Development/React Projects/hh/hablokia/src/newyork.jpg'
    }
  }
  render() {
    return (
      <div className="home">
        <img className="homeImage" src={img} />
        <div className="cardTyps">
        </div>
        <div className="homeMediaCards">
          <div>
            <h1>סוג 1</h1>
            <MediaCard
              cardSubject={this.state.cardSubject}
              cardDescription={this.state.cardDescription}
              cardImagePath={this.state.cardImagePath} />
          </div>
          <div>
            <h1>סוג 2</h1>
            <MediaCard
              cardSubject={this.state.cardSubject}
              cardDescription={this.state.cardDescription}
              cardImagePath={this.state.cardImagePath} />
          </div>
          <div>
            <h1>סוג 3</h1>
            <MediaCard
              cardSubject={this.state.cardSubject}
              cardDescription={this.state.cardDescription}
              cardImagePath={this.state.cardImagePath} />
          </div>
        </div>
      </div>
    );
  }
}
export default home;