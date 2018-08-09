import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthRegister from './components/auth/Register';
import FixturesIndex from './components/fixtures/Index';
import LeagueNew from './components/leagues/New';
import ResultsIndex from './components/fixtures/ResultsIndex';
import PicksIndex from './components/fixtures/PicksIndex';
import UsersShow from './components/common/UsersShow';
import NotFound from './components/common/NotFound';
import Home from './components/Home';


import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/leagues/new" component={LeagueNew} />
          <Route path="/fixtures/picks/:week" component={PicksIndex} />
          <Route path="/fixtures/results/:week" component={ResultsIndex} />
          <Route path="/register" component={AuthRegister} />
          <Route path="/fixtures" component={FixturesIndex} />
          <Route path="/dashboard" component={UsersShow} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
