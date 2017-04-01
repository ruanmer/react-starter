import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from 'components/App/AppHeader';
import AppMain from 'components/App/AppMain';
import Home from 'views/Home';
import About from 'views/About';

import './global-styles';

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <AppHeader />

          <AppMain>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </AppMain>
        </div>
      </Router>
    )
  }
}
