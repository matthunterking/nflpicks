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
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/fixtures', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => this.props.history.replace('/fixtures/new'));
  }

  render() {
    if(!this.state.teams) return null;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <p>HOME TEAM </p><select
            className="select"
            name="homeTeam"
            placeholder=''
            onChange={this.handleChange}>
            <option value=''></option>
            {this.state.teams.map(team =>
              <option
                key={team._id}
                value={team._id}
              >{team.name}</option>
            )}
          </select>
          <p>AWAY TEAM </p><select
            className="select"
            name="awayTeam"
            placeholder=''
            onChange={this.handleChange}>
            <option value=''></option>
            {this.state.teams.map(team =>
              <option
                key={team._id}
                value={team._id}
              >{team.name}</option>
            )}
          </select>
          <p>Week </p><select
            name="week"
            onChange={this.handleChange}>
            <option value=''></option>
            <option value="18">Wild Card (4)</option>
            <option value="19">Divisional (4)</option>
            <option value="20">Conference (8)</option>
            <option value="21">SuperBowl (16)</option>
          </select>
          <p>Points </p><input name="points"
            placeholder=''
            onChange={this.handleChange}
            type='number'></input>
        </div>
        <button>Sumbit</button>
      </form>
    );
  }
}

export default FixtureNew;
