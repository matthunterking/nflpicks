import React from 'react';
import axios from 'axios';

class FixturesIndex extends React.Component {

  state = {
    fixtures: []
  }

  componentDidMount() {
    axios
      .get('api/fixtures')
      .then(res => this.setState({ fixtures: res.data }));
  }

  render() {
    return (
      <div>
        {!this.state.fixtures && <p>Loading...</p>}
        {this.state.fixtures &&
          <div className='container'>
            <div className="columns has-text-centered">
              <div className="column is-one-half title">Away Team</div>
              <div className="column is-one-half title">Home Team</div>
            </div>
            {this.state.fixtures.map(fixture =>
              <div key={fixture.id} className="columns has-text-centered">
                <div className="column is-one-half"
                  style={{ backgroundColor: `${fixture.awayTeam.primaryColor}` }}>
                  <img src={fixture.awayTeam.logo} />
                  <p className="title"
                    style={{ color: `${fixture.awayTeam.secondaryColor}` }}>
                    {fixture.awayTeam.name}</p>
                </div>
                <div
                  className="column is-one-half"
                  style={{ backgroundColor: `${fixture.homeTeam.primaryColor}` }}>
                  <img src={fixture.homeTeam.logo} />
                  <p
                    className="title"
                    style={{ color: `${fixture.homeTeam.secondaryColor}` }}>
                    {fixture.homeTeam.name}</p>
                </div>
              </div>
            )}
          </div> }
      </div>
    );
  }

}

export default FixturesIndex;
