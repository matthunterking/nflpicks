import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';


import SubMenu from '../partials/UserShowSubMenu';
import LeftPanel from '../partials/UserShowLeftPanel';
import TopPanel from '../partials/UserShowTopPanel';
import MiddlePanel from '../partials/UserShowMiddlePanel';
import LockDisplay from '../partials/UserShowLockDisplay';
import LeagueDisplay from '../partials/UserShowLeagueDisplay';

class UsersShow extends React.Component {

  state = {};

  componentDidMount () {
    let userData;
    let leaguesData;
    let weeks;

    const chartOptions = {
      legend: {
        display: false
      },
      cutoutPercentage: 80
    };

    const scoreChartData = {
      labels: [
        'Correct Picks',
        'Incorrct Picks'
      ],
      datasets: [{
        data: [],
        backgroundColor: [],
        borderColor: ['','']
      }]
    };

    const lockChartData = {
      labels: [
        'Correct Locks',
        'Incorrct Locks'
      ],
      datasets: [{
        data: [],
        backgroundColor: [],
        borderColor: ['','']
      }]
    };

    function updateData() {
      weeks = userData.picks.map(pick => parseInt(pick.week) + 1);
      weeks = [1].concat(weeks).filter((week, index, array) => week !== array[index-1]);
      const totalAvailable = (weeks.length - 1) * userData.picks.length + 4;

      //TODO clean this up and sort out post season

      scoreChartData.datasets[0].data = [(userData.score/totalAvailable).toFixed(2), ((totalAvailable - userData.score)/totalAvailable).toFixed(2)];

      const correctLocks = userData.picks.filter(pick => pick.pointsScored === 5).length;
      lockChartData.datasets[0].data = [(correctLocks/weeks.length), ((weeks.length-correctLocks)/weeks.length)];

      if(userData.favouriteTeam) {
        scoreChartData.datasets[0].backgroundColor = [userData.favouriteTeam.secondaryColor, userData.favouriteTeam.tertiaryColor];
        lockChartData.datasets[0].backgroundColor = [userData.favouriteTeam.secondaryColor, userData.favouriteTeam.tertiaryColor];
      } else {
        scoreChartData.datasets[0].backgroundColor = ['#013369', 'black'];
        lockChartData.datasets[0].backgroundColor = ['#013369', 'black'];
      }
      console.log('this is in update', chartOptions, scoreChartData, lockChartData);
    }

    axios
      .get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => userData = res.data)
      .then(() => {
        return axios
          .get('/api/leagues', {
            headers: { Authorization: `Bearer ${Auth.getToken()}`}
          })
          .then(res => {
            leaguesData = res.data;
          })
          .then(() => updateData())
          .then(() => {
            console.log('in the last then', leaguesData);
            return axios
              .get('/api/teams')
              .then(res =>
                this.setState({
                  teams: res.data,
                  user: userData,
                  leagues: leaguesData,
                  weeks: weeks,
                  scoreData: scoreChartData,
                  lockData: lockChartData,
                  chartOptions: chartOptions
                }, () => console.log('this is the state',this.state)));
          });
      });
  }

  render() {
    if(!this.state.user) return null;
    console.log('here is the state ',this.state);
    const { user } = this.state;
    return (
      <div>
        {user && <div className="container userShowContainer">
          <div className="columns">
            <div className="column is-one-quarter">
            </div>
            <div className="column is-three-quarters">
              <SubMenu currentWeek={this.state.weeks[this.state.weeks.length - 1]} />
            </div>
          </div>
          <div className="columns">
            <LeftPanel user={user} weeks={this.state.weeks}/>
            <div className='column is-four-fifths centralColumn'>
              <TopPanel
                user={user}
                week={this.state.weeks}
                chartOptions={this.state.chartOptions}
                scoreData={this.state.scoreData}
                lockData={this.state.lockData}/>
              <MiddlePanel
                user={user}
                week={this.state.weeks}
              />
              <div className="columns">
                <div className="column is-one-half bottomPanel">
                  <LockDisplay
                    teams={this.state.teams}
                    user={this.state.user}
                  />
                </div>
                <div className="column is-one-half bottomPanel">
                  <LeagueDisplay
                    leagues={this.state.leagues}
                    user={this.state.user}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default withRouter(UsersShow);
