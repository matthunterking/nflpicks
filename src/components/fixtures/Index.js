import React from 'react';
import axios from 'axios';

class FixturesIndex extends React.Component {

  state = {
    fixtures: [],
    results: []
  }

  componentDidMount() {
    axios
      .get('api/fixtures')
      .then(res => this.setState({ fixtures: res.data }));
  }

  handleClick = (e) => {
    const results = [].concat(...this.state.results);
    const data = {
      fixtureId: e.target.parentNode.getAttribute('fixture') || e.target.getAttribute('fixture'),
      winner: e.target.parentNode.getAttribute('winner') || e.target.getAttribute('winner'),
      loser: e.target.parentNode.getAttribute('loser') || e.target.getAttribute('loser')
    };
    if(results.some(result => result.fixtureId === data.fixtureId)) {
      const index = results.findIndex(result => result.fixtureId === data.fixtureId);
      results.splice(index, 1, data);
    } else {
      results.push(data);
    }
    this.setState({ results: results }, () => {
      console.log(this.state.results);
    });
  }

  render() {
    return (
      <div>
        {!this.state.fixtures && <p>Loading...</p>}
        {this.state.fixtures &&
          <div className='container'>
            <p className="title is-1">Week </p>
            {this.state.fixtures.map(fixture =>
              <div key={fixture._id}>
                <div className="columns is-mobile has-text-centered">
                  <div className="column is-two-fifths teamContainer"
                    fixture={fixture._id}
                    winner={fixture.awayTeam._id}
                    loser={fixture.homeTeam._id}
                    onClick={this.handleClick}
                    style={{
                      backgroundColor:
                      this.state.results.some(result => result.loser === fixture.awayTeam._id) ?
                        'grey' : `${fixture.awayTeam.primaryColor}`
                    }}
                  >
                    <div className="teamLogo"
                      style={{
                        backgroundImage:
                        this.state.results.some(result => result.loser === fixture.awayTeam._id) ?
                          `url(/assets/images/${fixture.awayTeam.logo}BW.png)` :
                          `url(/assets/images/${fixture.awayTeam.logo}.png)`
                      }}
                    />
                    <p className="title is-5"
                      style={{
                        color:
                        this.state.results.some(result => result.loser === fixture.awayTeam._id) ?
                          'black' :`${fixture.awayTeam.secondaryColor}` }}>
                      {fixture.awayTeam._id}{fixture.awayTeam.name}</p>
                  </div>

                  <div className="column is-one-fifths teamContainer">
                    <p className="title is-one">at</p>
                  </div>

                  <div className="column is-two-fifths teamContainer"
                    fixture={fixture._id}
                    winner={fixture.homeTeam._id}
                    loser={fixture.awayTeam._id}
                    onClick={this.handleClick}
                    style={{
                      backgroundColor:
                      this.state.results.some(result => result.loser === fixture.homeTeam._id) ?
                        'grey' :
                        this.state.results.some(result => result.winner === fixture.homeTeam._id) ?
                          `${fixture.homeTeam.primaryColor}` :
                          `${fixture.homeTeam.secondaryColor}`
                    }}
                  >
                    <div className="teamLogo"
                      style={{
                        backgroundImage:
                          this.state.results.some(result => result.loser === fixture.homeTeam._id) ?
                            `url(/assets/images/${fixture.homeTeam.logo}BW.png)` :
                            `url(/assets/images/${fixture.homeTeam.logo}.png)`
                      }}
                    />
                    <p className="title is-5"
                      style={{
                        color:
                        this.state.results.some(result => result.loser === fixture.homeTeam._id) ?
                          'black' : this.state.results.some(result => result.winner === fixture.homeTeam._id) ?
                            `${fixture.homeTeam.secondaryColor}` :
                            `${fixture.homeTeam.primaryColor}`
                      }}>
                      {fixture.homeTeam._id}{fixture.homeTeam.name}</p>
                  </div>
                </div>
              </div>
            )}
          </div> }
      </div>
    );
  }

}

export default FixturesIndex;
