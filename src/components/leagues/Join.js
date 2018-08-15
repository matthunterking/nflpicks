import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class LeagueJoin extends React.Component {

  state= {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`/api/leagues/${this.state.leagueId}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => this.props.history.replace('/leagues/join'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="input"
            name="leagueId"
            placeholder="LEAGUE NAME"
            onChange={this.handleChange}
          />
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

export default LeagueJoin;
