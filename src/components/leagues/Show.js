import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
// import Auth from '../../lib/Auth';

class LeagueShow extends React.Component {

  state = {
    league: null
  };

  componentDidMount () {
    axios
      .get(`/api/leagues/${this.props.match.params.leagueId}`)
      .then(res => this.setState({ league: res.data }, () => {
        console.log('===>', this.state.league);
      }));
  }

  render() {
    const { league } = this.state;
    if(!this.state.league) return null;
    return (
      <div>
        {league && <div>
          <p>league Name ={league.leagueName}</p>
          <table className="table">
            <thead>
              <th>Position</th>
              <th>Name</th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Total</th>
            </thead>
            <tbody>
              {league.users.map(user =>
                <tr key={user.id}>
                  <td>{user.position}</td>
                  <td>{user.userId.name}</td>
                  <td>{user.userId.picks.filter(pick => pick.week === '1').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
                  <td>{user.userId.picks.filter(pick => pick.week === '2').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
                  <td>{user.userId.score}</td>
                </tr>)}
            </tbody>
          </table>
          <p>Send this link to invite someone to this league <span>http://localhost:8000/leagues/{league.id}/join</span></p>
        </div>}
      </div>
    );
  }
}

export default LeagueShow;
