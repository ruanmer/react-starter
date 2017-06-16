import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Bundle from 'utils/Bundle';

import AppHeader from 'components/App/AppHeader';
import AppMain from 'components/App/AppMain';

import loadHome from 'bundle-loader?lazy&name=home!views/Home';
import loadAbout from 'bundle-loader?lazy&name=about!views/About';

const Home = props => <Bundle load={loadHome} {...props} />;
const About = props => <Bundle load={loadAbout} {...props} />;

import './styles/global';

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
    );
  }
}
