
import React, { Component } from 'react';
import img from '../media/images/newYork_homePage.jpg';
import ReasonToChooseUs from './ReasonToChooseUs.css'

class reasonToChooseUs extends Component {
  constructor(props) {
    super(props);
  }




  render() {
    const { reasonSubject, reasonDescription } = this.props;
    return (
      <div className="reasonBox">
        {reasonSubject}
       {reasonDescription}
      
      </div>
    );
  }
}
export default reasonToChooseUs;

