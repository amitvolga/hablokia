import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class buttonNavigation extends Component {


  render() {
    return (
      <div>
        <ul>
          <li> <Link to="/Home">Home</Link></li>
          <li> <Link to="/Gallery">Gallery</Link></li>
          <li> <Link to="/Users">Users</Link></li>
        </ul>
      </div>);
  }
}





export { buttonNavigation as default }



