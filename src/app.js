import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthRegister from './components/auth/Register';
import FixturesIndex from './components/fixtures/Index';
import FixturesNew from './components/fixtures/New';
import LeagueNew from './components/leagues/New';
import LeaguesIndex from './components/leagues/Index';
import LeagueJoin from './components/leagues/Join';
import LeagueShow from './components/leagues/Show';
import ResultsIndex from './components/fixtures/ResultsIndex';
import PicksIndex from './components/fixtures/PicksIndex';
import PastPicksIndex from './components/fixtures/PastPicksIndex';
import UsersShow from './components/users/UsersShow';
import UsersEdit from './components/common/Edit';
import Navbar from './components/common/Navbar';
import NotFound from './components/common/NotFound';
import Home from './components/Home';


import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/leagues/new" component={LeagueNew} />
            <Route exact path="/leagues" component={LeaguesIndex} />
            <Route path="/leagues/join" component={LeagueJoin} />
            {/* <Route path="/leagues/:leagueId" component={LeagueShow} /> */}
            <Route path="/users/:id/edit" component={UsersEdit} />
            <Route path="/fixtures/picks/history/:week" component={PastPicksIndex} />
            <Route path="/fixtures/picks/:week" component={PicksIndex} />
            <Route path="/fixtures/results/:week" component={ResultsIndex} />
            <Route path="/register" component={AuthRegister} />
            <Route path="/fixtures/new" component={FixturesNew} />
            <Route path="/fixtures" component={FixturesIndex} />
            <Route path="/dashboard" component={UsersShow} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
