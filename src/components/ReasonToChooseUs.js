
import React, { Component } from 'react';
import img from '../media/images/newYork_homePage.jpg';
import ReasonToChooseUs from './ReasonToChooseUs.css'

class reasonToChooseUs extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { reasonSubject, reasonDescription, reasonImage } = this.props;
    return (
      <div className="reasonBox">
        <img className="homeIdmage" src={reasonImage} />
        <div>
          <p><b>{reasonSubject}</b></p>
          <p>{reasonDescription}</p>
        </div>
      </div>
    );
  }
}
export default reasonToChooseUs;

