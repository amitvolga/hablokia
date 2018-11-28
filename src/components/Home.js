
import React, { Component } from 'react';
import img from '../newyork.jpg';
import './Home.css';
import MediaCard from './MediaCard';


class home extends Component {
  render() {
    return (
      <div className="home">
        <img className="homeImage" src={img} />
        <div className="cardTyps">
        </div>
        <div className="homeMediaCards">
          <div>
            <h1>סוג 1</h1>
            <MediaCard />
          </div>
          <div>
            <h1>סוג 2</h1>
            <MediaCard />
          </div>
          <div>
            <h1>סוג 3</h1>
            <MediaCard />
          </div>
        </div>
      </div>
    );
  }
}
export default home;