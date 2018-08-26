import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Pie } from 'react-chartjs-2';
import CountUp from 'react-countup';

class UsersShow extends React.Component {

  state = {
    user: null,
    leagues: [],
    teams: [],
    weeks: [],
    counter: 0
  };

  componentDidMount () {
    let userData;
    let leaguesData;
    let weeks;

    const chartData = {
      labels: [
        'Red',
        'Green'
      ],
      datasets: [{
        data: [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB'
          // '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB'
          // '#FFCE56'
        ]
      }]
    };

    axios
      .get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => userData = res.data)
      .then(
        axios
          .get('/api/leagues', {
            headers: { Authorization: `Bearer ${Auth.getToken()}`}
          })
          .then(res => leaguesData = res.data)
          .then(() => {
            weeks = userData.picks.map(pick => parseInt(pick.week) + 1);
            console.log('this is weeks', weeks);
            weeks = [1].concat(weeks).filter((week, index, array) => week !== array[index-1]);
            console.log('this is the last weeks', weeks);
            const totalAvailable = userData.score - ((weeks.length - 1) * userData.picks.length + 4);
            chartData.datasets[0].data = [userData.score, totalAvailable];
            axios
              .get('/api/teams')
              .then(res => this.setState({ teams: res.data, user: userData, leagues: leaguesData, weeks: weeks, data: chartData }, () => {
                console.log(this.state);
              }));
          }
          ));
  }


  render() {
    const { user } = this.state;
    if(!this.state.user || !this.state.leagues || !this.state.teams) return null;
    return (
      <div>
        {user && <div>
          <p>{user.name}s DASHBOARD</p>
          <CountUp className="title is-1" start={0} end={this.state.user.score} duration={2} />
          <Pie data={this.state.data} />
          <div className="columns is-multiline">
            {this.state.teams.sort((a, b) => {
              if(a.division < b.division) return -1;
              if(a.division > b.division) return 1;
              return 0;
            }).map(team =>
              <div className="column is-3" key={team._id}>
                <div className="teamLogo" style={{
                  backgroundImage: `url(/assets/images/${team.logo})`,
                  backgroundColor:
                  this.state.user.locks.includes(team._id) ?
                    'Black' : `${team.primaryColor}`,
                  opacity:
                  this.state.user.locks.includes(team._id) ?
                    0.4 : 1
                }}>
                </div>
              </div>
            )}
          </div>
          <table className="table">
            <thead>
              <th>WEEK</th>
              <th>Make Picks</th>
              <th>Score</th>
            </thead>
            <tbody>
              {this.state.weeks.map(week =>
                <tr key={week}>
                  <td>{week}</td>
                  <td>
                    <Link to={`/fixtures/picks/${week}`}>Make PICKS</Link>
                  </td>
                  <td>{user.picks.filter(pick => pick.week === week.toString()).reduce((total, pick) => total + pick.pointsScored, 0)}</td>
                </tr>)}
              <tr>
                <td>TOTAL</td>
                <td></td>
                <td>{user.score}</td>
              </tr>
            </tbody>
          </table>

          <div>
            {this.state.leagues.map(league =>
              <div key={league._id}>
                <Link to={`/leagues/${league._id}`}>league name = {league.leagueName}</Link>
                <div>
                  <div>
                    <p>POSITION</p>
                    <p></p>
                    <p>Score</p>
                  </div>
                  <div>
                    {league.users.map(user =>
                      <div key={user._id}>
                        <p>position {user.position}</p>
                        <p>{user.userId.name}</p>
                        <p>{user.userId.score}</p>
                        {/* <p>{row.name}</p>
                        <p>{row.score}</p> */}
                      </div>
                    )}
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>)}
            <Link to="/leagues/new">Create League</Link>
            <Link to="/leagues/join">Join League</Link>
          </div>

          <div className="columns">
            <div className="column is-one-half">
              <p>MAKE PICKS</p>

              <Link to="/fixtures/picks/2">Make picks for Week 2</Link>
              <Link to="/fixtures/picks/3">Make picks for Week 3</Link>
              <Link to="/fixtures/picks/4">Make picks for Week 4</Link>
              <Link to="/fixtures/picks/5">Make picks for Week 5</Link>
              <Link to="/fixtures/picks/6">Make picks for Week 6</Link>
              <Link to="/fixtures/picks/7">Make picks for Week 7</Link>
              <Link to="/fixtures/picks/8">Make picks for Week 8</Link>
              <Link to="/fixtures/picks/9">Make picks for Week 9</Link>
              <Link to="/fixtures/picks/10">Make picks for Week 10</Link>
              <Link to="/fixtures/picks/11">Make picks for Week 11</Link>
              <Link to="/fixtures/picks/12">Make picks for Week 12</Link>
              <Link to="/fixtures/picks/13">Make picks for Week 13</Link>
              <Link to="/fixtures/picks/14">Make picks for Week 14</Link>
              <Link to="/fixtures/picks/15">Make picks for Week 15</Link>
              <Link to="/fixtures/picks/16">Make picks for Week 16</Link>
              <Link to="/fixtures/picks/17">Make picks for Week 17</Link>
            </div>
            {this.state.user.admin && <div className="column is-one-half">
              <p>SET RESULTS</p>
              <Link to="/fixtures/results/1">Set Results for Week 1</Link>
              <Link to="/fixtures/results/2">Set Results for Week 2</Link>
              <Link to="/fixtures/results/3">Set Results for Week 3</Link>
              <Link to="/fixtures/results/4">Set Results for Week 4</Link>
              <Link to="/fixtures/results/5">Set Results for Week 5</Link>
              <Link to="/fixtures/results/6">Set Results for Week 6</Link>
              <Link to="/fixtures/results/7">Set Results for Week 7</Link>
              <Link to="/fixtures/results/8">Set Results for Week 8</Link>
              <Link to="/fixtures/results/9">Set Results for Week 9</Link>
              <Link to="/fixtures/results/10">Set Results for Week 10</Link>
              <Link to="/fixtures/results/11">Set Results for Week 11</Link>
              <Link to="/fixtures/results/12">Set Results for Week 12</Link>
              <Link to="/fixtures/results/13">Set Results for Week 13</Link>
              <Link to="/fixtures/results/14">Set Results for Week 14</Link>
              <Link to="/fixtures/results/15">Set Results for Week 15</Link>
              <Link to="/fixtures/results/16">Set Results for Week 16</Link>
              <Link to="/fixtures/results/17">Set Results for Week 17</Link>
            </div>}
          </div>
        </div>}
      </div>
    );
  }
}

export default withRouter(UsersShow);
