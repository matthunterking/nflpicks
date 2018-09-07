import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

import SubMenu from '../partials/UserShowSubMenu';
import Locks from '../common/Locks';
import PastFixture from '../common/PastFixture';

class PastPicksIndex extends React.Component {

  state = {
    fixtures: [],
    picks: [],
    week: 0,
    user: null
  }

  componentDidMount() {
    axios
      .get(`/api/fixtures/week/${this.props.match.params.week}`)
      .then(res => this.setState({ fixtures: res.data, week: res.data[0].week }, () => {
        axios
          .get(`/api/users/${Auth.getPayload().sub}`)
          .then(res => this.setState({ user: res.data }, () => {
            axios.get('/api/teams').then(res => this.setState({teams: res.data}));
          }));
      }));
  }

  render() {
    if(!this.state.fixtures || !this.state.picks || !this.state.user || !this.state.teams) return null;
    const { user } = this.state;
    return (
      <div>
        {this.state.fixtures &&
          <div className='container userShowContainer'>
            <div className="columns">
              <div className="column is-one-quarter">
              </div>
              <div className="column is-three-quarters">
                <SubMenu currentWeek={this.state.week} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-fifth leftProfileContainer" style={{
                backgroundColor:
                  user.favouriteTeam ?
                    `${user.favouriteTeam.tertiaryColor}B3` : 'black'
              }}>
                <Locks user={user} teams={this.state.teams} />
              </div>
              <div className='column is-four-fifths centralColumn'>
                <div className='middleProfileContainer' style={{
                  backgroundColor:
                    user.favouriteTeam ?
                      `${user.favouriteTeam.tertiaryColor}B3` : 'black'
                }}>
                  <p className="standardText">Week { this.state.week } picks</p>
                  <hr />
                  {this.state.fixtures.map(fixture =>
                    <div key={fixture._id}>
                      <div className="columns is-mobile has-text-centered">
                        <PastFixture
                          fixture={fixture}
                          user={this.state.user}
                        />
                      </div>
                    </div> )}
                  {this.state.picks.length === this.state.fixtures.length &&
                    !!this.state.picks.filter(pick => pick.lock).length &&
                    <button onClick={this.handleSubmit} className='button standardText' style={{
                      backgroundColor:
                    user.favouriteTeam ?
                      `${user.favouriteTeam.primaryColor}` : '#D50A0A',
                      color: user.favouriteTeam ?
                        `${user.favouriteTeam.secondaryColor}` : '#013369'
                    }}>Submit</button>}
                </div>
              </div>
            </div>



          </div>}
      </div>
    );
  }

}

export default PastPicksIndex;
