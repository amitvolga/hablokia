import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import User from './User';
import Home from './Home';



class routering extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.children}
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/User" component={User} />
              <Route path="/Gallery" component={Gallery} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}
export default routering;