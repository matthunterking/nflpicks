import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class LeagueJoin extends React.Component {

  state= {
    leagueId: this.props.match.params.leagueId,
    code: null,
    user: null
  };

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
      <main>
        {Auth.isAuthenticated() && <div>
          <form onSubmit={this.handleSubmit}>
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
        {!Auth.isAuthenticated() && <div>
          <form onSubmit={this.handleLoginSubmit} className="box">
            <div className="field">
              <input
                className="input"
                name="email"
                placeholder="Email"
                onChange={this.handleRegistrationChange}
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                onChange={this.handleRegistrationChange}
              />
            </div>
            <button className="button submitButton">Log in</button>
          </form>
          <p>Please register to join this league</p>
          <form onSubmit={this.handleRegistration}>
            <div className='columns'>
              <div className='column'>
                <div className="field">
                  <input
                    className="input"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleRegistrationChange}
                  />
                </div>
                <div className="field">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleRegistrationChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleRegistrationChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    className="input"
                    name="passwordConfirmation"
                    placeholder="Password Confirmation"
                    onChange={this.handleRegistrationChange}
                  />
                </div>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>}
      </main>
    );
  }
}

export default LeagueJoin;
