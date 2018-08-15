import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {

  state = {
    user: null,
    leagues: [],
    teams: []
  };

  componentDidMount () {
    axios
      .get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }, () => {
        console.log('===>', this.state.user);
        axios
          .get('/api/leagues', {
            headers: { Authorization: `Bearer ${Auth.getToken()}`}
          })
          .then(res => {
            console.log('we got these leagues from server', res.data);
            this.setState({leagues: res.data }, () => {
              console.log('-->', this.state);
              axios
                .get('/api/teams')
                .then(res => this.setState({ teams: res.data }, () => {
                  console.log(this.state);
                }));
            });
          });
      }
      ));
  }

  //// TODO: WORK OUT A WAY TO FILTER OUT LEAGUES THAT THIS USER IS NOT IN!

  render() {
    const { user } = this.state;
    if(!this.state.user || !this.state.leagues || !this.state.teams) return null;
    return (
      <div>
        {user && <div>
          <p>{user.name}s DASHBOARD</p>
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
              <tr>
                <td>1</td>
                <td><Link to="/fixtures/picks/1">Make picks for Week 1</Link></td>
                <td>{user.picks.filter(pick => pick.week === '1').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>2</td>
                <td><Link to="/fixtures/picks/2">Make picks for Week 2</Link></td>
                <td>{user.picks.filter(pick => pick.week === '2').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>3</td>
                <td><Link to="/fixtures/picks/3">Make picks for Week 3</Link></td>
                <td>{user.picks.filter(pick => pick.week === '3').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>4</td>
                <td><Link to="/fixtures/picks/4">Make picks for Week 4</Link></td>
                <td>{user.picks.filter(pick => pick.week === '4').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>5</td>
                <td><Link to="/fixtures/picks/5">Make picks for Week 5</Link></td>
                <td>{user.picks.filter(pick => pick.week === '5').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>6</td>
                <td><Link to="/fixtures/picks/6">Make picks for Week 6</Link></td>
                <td>{user.picks.filter(pick => pick.week === '6').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>7</td>
                <td><Link to="/fixtures/picks/7">Make picks for Week 7</Link></td>
                <td>{user.picks.filter(pick => pick.week === '7').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>8</td>
                <td><Link to="/fixtures/picks/8">Make picks for Week 8</Link></td>
                <td>{user.picks.filter(pick => pick.week === '8').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>9</td>
                <td><Link to="/fixtures/picks/9">Make picks for Week 9</Link></td>
                <td>{user.picks.filter(pick => pick.week === '9').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>10</td>
                <td><Link to="/fixtures/picks/10">Make picks for Week 10</Link></td>
                <td>{user.picks.filter(pick => pick.week === '10').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>11</td>
                <td><Link to="/fixtures/picks/11">Make picks for Week 11</Link></td>
                <td>{user.picks.filter(pick => pick.week === '11').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>12</td>
                <td><Link to="/fixtures/picks/12">Make picks for Week 12</Link></td>
                <td>{user.picks.filter(pick => pick.week === '12').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>13</td>
                <td><Link to="/fixtures/picks/13">Make picks for Week 13</Link></td>
                <td>{user.picks.filter(pick => pick.week === '13').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>14</td>
                <td><Link to="/fixtures/picks/14">Make picks for Week 14</Link></td>
                <td>{user.picks.filter(pick => pick.week === '14').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>15</td>
                <td><Link to="/fixtures/picks/15">Make picks for Week 15</Link></td>
                <td>{user.picks.filter(pick => pick.week === '15').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>16</td>
                <td><Link to="/fixtures/picks/16">Make picks for Week 16</Link></td>
                <td>{user.picks.filter(pick => pick.week === '16').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
              <tr>
                <td>17</td>
                <td><Link to="/fixtures/picks/17">Make picks for Week 17</Link></td>
                <td>{user.picks.filter(pick => pick.week === '17').reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              </tr>
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
                <p>league name = {league.leagueName}</p>
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
            <div className="column is-one-half">
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
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default withRouter(UsersShow);
