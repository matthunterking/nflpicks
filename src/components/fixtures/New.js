import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class FixtureNew extends React.Component {

  state= {};

  componentDidMount() {
    axios
      .get('/api/teams')
      .then(res => this.setState({ teams: res.data }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/fixtures', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => this.props.history.replace('/leagues/new'));
  }

  render() {
    if(!this.state.teams) return null;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <p>HOME TEAM </p><select
            className="select"
            name="homeTeam"
            onChange={this.handleChange}>
            {this.state.teams.map(team =>
              <option
                key={team.id}
                value={team.id}
              >{team.name}</option>
            )}
          </select>
          <p>AWAY TEAM </p><select
            className="select"
            name="awayTeam"
            onChange={this.handleChange}>
            {this.state.teams.map(team =>
              <option
                key={team.id}
                value={team.id}
              >{team.name}</option>
            )}
          </select>
          <input
            className="input"
            name="code"
            placeholder="CODE WORD"
            onChange={this.handleChange}
          />
        </div>
        <button>Sumbit</button>
      </form>
    );
  }
}

export default FixtureNew;
