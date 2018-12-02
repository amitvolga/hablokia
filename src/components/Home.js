
import React, { Component } from 'react';
import img from '../media/images/newYork_homePage.jpg';
import './Home.css';
import MediaCard from './MediaCard';

import MediaCardHomePage from '../MediaCardHomePage.json'


class home extends Component {
  constructor() {
    super();
    this.state = {
      MediaCardHomePage: MediaCardHomePage
    }
  }
  render() {
    return (
      <div className="home">
        <img className="homeImage" src={img} />
        <div className="typeTitle" >כל הסוגים</div>
        <div className="homeMediaCards">
          {this.state.MediaCardHomePage.map(item =>
            <div className="cardTyps">
              <h2> {item.type}</h2>
              <MediaCard
                cardSubject={item.cardSubject}
                cardDescription={item.cardDescription}
                cardImagePath={item.cardImagePath} />

            </div>
          )
          }
        </div>
      </div >
    );
  }
}
export default home;

