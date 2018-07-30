import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthRegister from './components/auth/Register';
import Fixtures from './components/fixtures/Index';
import NotFound from './components/common/NotFound';
import Home from './components/Home';


import 'bulma';


class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route path="/register" component={AuthRegister} />
            <Route path="/fixtures" component={Fixtures} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
