import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class LeagueJoin extends React.Component {

  state= {
    leagueId: this.props.match.params.leagueId,
    code: null,
    user: null,
    registerMode: false
  };

  handleSwitch = () => {
    const registerMode = !this.state.registerMode;
    this.setState({ registerMode: registerMode });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleRegistrationChange = ({ target: { name, value } }) => {
    const user = {...this.state.user, [name]: value };
    this.setState({ user }, () => {
      console.log(this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('are we isAuthenticated? ',this.state);
    axios
      .post(`/api/leagues/${this.state.leagueId}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        window.reload();
      });
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('/api/login', this.state.user)
      .then(res =>  {
        Auth.login(res.data);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push(`/leagues/${this.state.leagueId}/join`))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.push(`/leagues/${this.state.leagueId}/join`);
      });
  }

  handleRegistration = (e) => {
    e.preventDefault();
    axios
      .post('/api/register', this.state.user)
      .then(res =>  {
        console.log(res.data.token);
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push(`/leagues/${this.state.leagueId}/join`))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.push(`/leagues/${this.state.leagueId}/join`);
      });
  }

  render() {
    return (
      <div className="homeScreen">
        <div className="homeScreenBackground">
          <div className="homeScreenContainer">
            {Auth.isAuthenticated() && <div className="registerContainer">
              <form onSubmit={this.handleSubmit} className="smallForm" style={{
                left: '40%',
                width: '500px',
                padding: '50px'
              }}>
                <div className="field">
                  <p>Input the league code below to join:</p>
                  <input
                    className="input"
                    name="code"
                    placeholder="CODE WORD"
                    onChange={this.handleChange}
                  />
                </div>
                <button>Sumbit</button>
              </form>
            </div>}
            {!Auth.isAuthenticated() && <div className="registerContainer" style={{width: '100%'}}>
              <button className="button registerButton" onClick={this.handleSwitch}>
                Register
              </button>
              {this.state.registerMode && <button className="button loginButton" onClick={this.handleSwitch} style={{
                left: '50%'
              }}>
                Log in
              </button>}
              {/* <Link className="button registerButton" to="/register">
              Register
                        </Link> */}
              <form onSubmit={this.handleSubmit} className="smallForm" style={{
                left: this.state.registerMode ? '-20%' : '30%'
              }}>
                {!this.state.registerMode && <p className="customSubTitle">SIGN IN TO JOIN LEAGUE</p>}
                {this.state.registerMode && <p className="customSubTitle">REGISTER TO JOIN LEAGUE</p>}
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
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default LeagueJoin;
