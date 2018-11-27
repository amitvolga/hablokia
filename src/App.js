import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar.js';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Routering from './components/Routering'


class App extends Component {

  state = {
    sideDrawerOpen: false

  };

  drawerToggleClicklHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.SideDrawer }
    });
  };

  backDropClickHndler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {

    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHndler} />;
    }
    return (
      <div style={styles.container}>
        <Routering>
          <Toolbar drawerClickHandler={this.drawerToggleClicklHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </Routering>
      </div >
    );
  }
}

const styles = {
  container: {
  }
}

export default App;
