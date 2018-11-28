import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar.js';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';
import User from './components/User';
import Home from './components/Home';

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
    const { sideDrawerOpen } = this.state;
    return (
      <div style={styles.container}>
        <Router>
          <div>
            <Toolbar drawerClickHandler={this.drawerToggleClicklHandler} />
            <SideDrawer show={sideDrawerOpen} />
            {sideDrawerOpen && <Backdrop click={this.backDropClickHndler} />}
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/Home" component={Home} />
              <Route path="/User" component={User} />
              <Route path="/Gallery" component={Gallery} />
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

const styles = {
  container: {
  }
}

export default App;
