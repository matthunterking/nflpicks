import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

import SubMenu from '../partials/UserShowSubMenu';
import LeftPanel from '../partials/UserShowLeftPanel';
import LeagueTable from '../partials/LeagueTable';

class LeaguesIndex extends React.Component {

  state = {};

  componentDidMount () {
    let userData;
    let leaguesData;
    let selectedLeague;
    let weeks;

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
            selectedLeague = res.data[0];
            weeks = userData.picks.map(pick => parseInt(pick.week) + 1);
            weeks = [1].concat(weeks).filter((week, index, array) => week !== array[index-1]);
            this.setState({ user: userData, leagues: leaguesData, weeks: weeks, selectedLeague: selectedLeague }, () => {
              console.log(this.state);
            });
          });
      });
  }

  render() {
    if(!this.state.user) return null;
    const { user, leagues, selectedLeague, weeks } = this.state;
    console.log(!!leagues.length);
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
              <div className="topProfileContainer" style={{
                backgroundColor:
                user.favouriteTeam ?
                  `${user.favouriteTeam.tertiaryColor}B3` : 'black'
              }}>
                <div className="topPanelTopLine">
                  <p className="standardText">My Leagues</p>
                </div>
                <hr />
                <div >
                  {!leagues.length && <div>
                    <Link to={'/leagues/new'} className='button standardText editProfile' style={{
                      backgroundColor:
                      user.favouriteTeam ?
                        `${user.favouriteTeam.primaryColor}` : '#D50A0A',
                      color: user.favouriteTeam ?
                        `${user.favouriteTeam.secondaryColor}` : '#013369'
                    }}>Create a League</Link>
                  </div>}
                  {!!leagues.length && <div>
                    {leagues.map(league =>
                      <div key={league._id} className="columns">
                        <div className="column is-one-half">
                          <p className="standardText size30">League: {league.leagueName}</p>
                        </div>
                        {league.users
                          .filter(leagueUser => leagueUser.userId._id === this.state.user._id)
                          .map(leagueuser =>
                            <div className="column is-one-half" key={leagueuser._id}>
                              <p className="standardText size30">Position: {leagueuser.position}</p>
                            </div>
                          )}
                      </div>)}
                  </div>}
                </div>
              </div>
              {!!leagues.length && <LeagueTable user={user} league={selectedLeague} weeks={weeks}/>}
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default LeaguesIndex;
