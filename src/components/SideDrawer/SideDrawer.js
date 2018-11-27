import React from 'react'
import './SideDrawer.css';
import ButtonNavigation from '../ButtonNavigation.js'


const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (<nav className={drawerClasses} ><ButtonNavigation /> </nav>)
};



export default sideDrawer;