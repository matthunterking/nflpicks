import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Flash from '../lib/Flash';
import Auth from '../lib/Auth';

class Home extends React.Component {
 state: {};

 handleChange = ({ target: { name, value } }) => {
   this.setState({ [name]: value });
 }

handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post('/api/login', this.state)
    .then(res =>  {
      Auth.login(res.data);
      Flash.setMessage('info', res.data.message);
    })
    .then(() => this.props.history.push('/fixtures'))
    .catch(() => {
      Flash.setMessage('danger', 'Invalid credentials');
      this.props.history.push('/');
    });
}

render() {
  return (
    <div>
      <p>NFL PICKS GAME!</p>
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <button className="button submitButton">Log in</button>
      </form>
      <div className="registerContainer">
        <Link className="button redirectButton" to="/register">
        Not registered? Join now!
        </Link>
      </div>
    </div>
  );
}
}

export default withRouter(Home);
