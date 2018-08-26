import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class FixturesIndex extends React.Component {

  state = {
    fixtures: [],
    results: [],
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
    const data = {
      fixtureId: e.target.parentNode.getAttribute('fixture') || e.target.getAttribute('fixture'),
      winner: e.target.parentNode.getAttribute('winner') || e.target.getAttribute('winner'),
      loser: e.target.parentNode.getAttribute('loser') || e.target.getAttribute('loser')
    };
    axios
      .post(`/api/fixtures/${data.fixtureId}`, data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res.data);
        const results = this.state.fixtures;
        const index = this.state.fixtures.findIndex(fixture => fixture._id === res.data._id);
        console.log('this is results', results);
        console.log('this is index', index);
        results.splice(index, 1, res.data);
        this.setState({ fixtures: results }, () => {
          console.log(this.state);
        });
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
                      this.state.fixtures.some(result => result.loser === fixture.awayTeam._id) ?
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
                        this.state.fixtures.some(result => result.loser === fixture.awayTeam._id) ?
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
                      this.state.fixtures.some(result => result.loser === fixture.homeTeam._id) ?
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
                        this.state.fixtures.some(result => result.loser === fixture.homeTeam._id) ?
                          'black' : `${fixture.homeTeam.secondaryColor}`
                      }}>
                      {fixture.homeTeam.name}</p>
                  </div>
                </div>
                <hr />
              </div>
            )}
            <div>
              <Link to='/dashboard'>Return to Dashboard</Link>
            </div>
          </div> }
      </div>
    );
  }

}

export default FixturesIndex;
