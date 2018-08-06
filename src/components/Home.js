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
    .then(() => this.props.history.push('/dashboard'))
    .catch(() => {
      Flash.setMessage('danger', 'Invalid credentials');
      this.props.history.push('/');
    });
}

render() {
  return (
    <div className="homeScreen">
      <div className="container">
        <form onSubmit={this.handleSubmit} className="box">
          <p className="title is-1">NFL PICKS GAME!</p>
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
          <div className="registerContainer">
            <Link className="button redirectButton" to="/register">
            Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
}

export default withRouter(Home);
