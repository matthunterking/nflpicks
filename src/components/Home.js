import React from 'react';
import axios from 'axios';
import Flash from '../lib/Flash';
import Auth from '../lib/Auth';

class Home extends React.Component {
 state = {
   registerMode: false
 };

 handleChange = ({ target: { name, value } }) => {
   this.setState({ [name]: value });
 }

handleSubmit = (e) => {
  e.preventDefault();
  if(this.state.registerMode) {
    axios
      .post('/api/register', this.state)
      .then(res =>  {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.push('/');
      });
  } else {
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
}

handleSwitch = () => {
  const registerMode = !this.state.registerMode;
  this.setState({ registerMode: registerMode });
}

render() {
  return (
    <div className="homeScreen">
      <div className="homeScreenBackground">
        <div className="homeScreenContainer">
          <div className="registerContainer">
            <button className="button registerButton" onClick={this.handleSwitch}>
          Register
            </button>
            {this.state.registerMode && <button className="button loginButton" onClick={this.handleSwitch}>
          Log in
            </button>}
            {/* <Link className="button registerButton" to="/register">
          Register
          </Link> */}
          </div>
          <form onSubmit={this.handleSubmit} className="smallForm" style={{
            left: this.state.registerMode ? '-47%' : '-3%'
          }}>
            {!this.state.registerMode && <p className="customSubTitle">SIGN IN</p>}
            {this.state.registerMode && <p className="customSubTitle">REGISTER</p>}
            {this.state.registerMode && <div className="field">
              <input
                className="input"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>}
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

            {this.state.registerMode && <div className="field">
              <input
                type="password"
                className="input"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
            </div>}
            {!this.state.registerMode && <button className="redButton">Log in</button>}
            {this.state.registerMode && <button className="redButton">Register</button>}
          </form>
        </div>
      </div>
    </div>
  );
}
}

export default Home;
