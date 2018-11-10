import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class LeagueJoin extends React.Component {

  state = {
    user: null,
    registerMode: false,
    leagues: []
  };

  componentDidMount() {
    axios
      .get('/api/allLeagues')
      .then(res => {
        this.setState({ leagues: res.data });
      });
  }

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
    console.log('-=-=->', e.target.code.value);
    console.log('are we isAuthenticated? ',this.state);
    axios
      .post(`/api/leagues/${e.target.id.value}`, { code: e.target.code.value }, {
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
              {!!this.state.leagues.length && <div>
                {this.state.leagues.map(league =>
                  <form key={league.id} onSubmit={this.handleSubmit}>
                    <input className='input' name='code' value={league.code} style={{
                      display: 'none'
                    }}/>
                    <input className='input' name='id' value={league._id} style={{
                      display: 'none'
                    }}/>
                    <button className='button'>Join {league.leagueName}</button>
                  </form>
                )}
              </div>}
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default LeagueJoin;
