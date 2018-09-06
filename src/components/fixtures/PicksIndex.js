import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

import SubMenu from '../partials/UserShowSubMenu';
import Locks from '../common/Locks';
import Fixture from '../common/Fixture';

class PicksIndex extends React.Component {

  state = {
    fixtures: [],
    picks: [],
    week: 0,
    locked: false,
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

  handleClick = (e) => {
    const picks = [].concat(...this.state.picks);
    const data = {
      gameId: e.target.getAttribute('game'),
      winnerPick: e.target.getAttribute('winner'),
      loserPick: e.target.getAttribute('loser'),
      lock: false,
      week: this.state.week
    };
    if(picks.some(pick => pick.gameId === data.gameId)) {
      const index = picks.findIndex(pick => pick.gameId === data.gameId);
      picks.splice(index, 1, data);
    } else {
      picks.push(data);
    }
    this.setState({ picks: picks }, () => {
      console.log('this is state.picks',this.state.picks);
    });
  }

  handleLock = (e) => {
    let lockedTeam;
    const picks = [].concat(...this.state.picks);
    const data = {
      gameId: e.target.getAttribute('game')
    };
    if(picks.some(pick => pick.gameId === data.gameId)) {
      const index = picks.findIndex(pick => pick.gameId === data.gameId);
      picks[index].lock = true;
      lockedTeam = picks[index].winnerPick;
    } else {
      picks.push(data);
    }
    this.setState({ picks: picks, locked: lockedTeam }, () => {
      console.log('this is state in handleLock',this.state);
    });
  }

  handleUnlock = (e) => {
    let lockedTeam;
    const picks = [].concat(...this.state.picks);
    const data = {
      gameId: e.target.getAttribute('game')
    };
    if(picks.some(pick => pick.gameId === data.gameId)) {
      const index = picks.findIndex(pick => pick.gameId === data.gameId);
      picks[index].lock = false;
      lockedTeam = '';
    } else {
      picks.push(data);
    }
    this.setState({ picks: picks, locked: lockedTeam }, () => {
      console.log('this is state in handleUNLock',this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.picks);
    axios
      .post('/api/fixtures/picks', this.state.picks, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => {
        this.props.history.replace('/register');
      });
  }

  handleMouseOut = () => {
    this.setState({ hover: { target: null, active: false } });
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
                        <Fixture
                          fixture={fixture}
                          handleClick={this.handleClick}
                          handleLock={this.handleLock}
                          picks={this.state.picks}
                          locked={this.state.locked}
                          user={this.state.user}
                          handleUnlock={this.handleUnlock}
                        />
                      </div>
                    </div> )}
                </div>
              </div>
            </div>



          </div>}
      </div>
    );
  }

}

export default PicksIndex;
