import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class PicksIndex extends React.Component {

  state = {
    fixtures: [],
    picks: [],
    week: 0
  }

  componentDidMount() {
    console.log('THIS IS THE WEEK=>',this.props.match.params.week);
    axios
      .get(`/api/fixtures/week/${this.props.match.params.week}`)
      .then(res => this.setState({ fixtures: res.data, week: res.data[0].week }, () => {
        console.log('this is state at component did mount', this.state);
      }));
  }

  handleClick = (e) => {
    const picks = [].concat(...this.state.picks);
    const data = {
      gameId: e.target.parentNode.getAttribute('fixture') || e.target.getAttribute('fixture'),
      winnerPick: e.target.parentNode.getAttribute('winner') || e.target.getAttribute('winner'),
      loserPick: e.target.parentNode.getAttribute('loser') || e.target.getAttribute('loser'),
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

  render() {
    return (
      <div>
        {!this.state.fixtures && <p>Loading...</p>}
        {this.state.fixtures &&
          <div className='container'>
            <p className="title is-1">Week { this.state.week }</p>
            {this.state.fixtures.map(fixture =>
              <div key={fixture._id}>
                <div className="columns is-mobile has-text-centered">
                  <div className="column is-one-half teamContainer"
                    fixture={fixture._id}
                    winner={fixture.awayTeam._id}
                    loser={fixture.homeTeam._id}
                    onClick={this.handleClick}
                    style={{
                      backgroundColor:
                      this.state.picks.some(pick => pick.loserPick === fixture.awayTeam._id) ?
                        'grey' : `${fixture.awayTeam.primaryColor}`
                    }}
                  >
                    <div className="teamLogo"
                      style={{
                        backgroundImage: `url(/assets/images/${fixture.awayTeam.logo})`
                      }}
                    />
                    <p className="title is-4 teamName"
                      style={{
                        color:
                        this.state.picks.some(pick => pick.loserPick === fixture.awayTeam._id) ?
                          'black' :`${fixture.awayTeam.secondaryColor}` }}>
                      {fixture.awayTeam.name}</p>
                  </div>

                  {/* <div className="column is-one-fifths fixtureAt">
                    <p className="title is-one has-text-white">at</p>
                  </div> */}

                  <div className="column is-one-half teamContainer"
                    fixture={fixture._id}
                    winner={fixture.homeTeam._id}
                    loser={fixture.awayTeam._id}
                    onClick={this.handleClick}
                    style={{
                      backgroundColor:
                      this.state.picks.some(pick => pick.loserPick === fixture.homeTeam._id) ?
                        'grey' : `${fixture.homeTeam.primaryColor}`
                    }}
                  >
                    <div className="teamLogo"
                      style={{
                        backgroundImage: `url(/assets/images/${fixture.homeTeam.logo})`
                      }}
                    />
                    <p className="title is-5 teamName"
                      style={{
                        color:
                        this.state.picks.some(pick => pick.loserPick === fixture.homeTeam._id) ?
                          'black' : `${fixture.homeTeam.secondaryColor}`
                      }}>
                      {fixture.homeTeam.name}</p>
                  </div>
                </div>
                <hr />
              </div>
            )}
            {/* {this.state.picks.length === this.state.fixtures.length && <div> */}
              <button onClick={this.handleSubmit}>Submit Results</button>
            {/* </div>} */}
            <div>
              <Link to='/dashboard'>Return to Dashboard</Link>
            </div>
          </div> }
      </div>
    );
  }

}

export default PicksIndex;
