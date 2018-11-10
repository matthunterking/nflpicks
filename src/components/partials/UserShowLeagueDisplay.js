import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Fix this filter thing

const LeagueDisplay = ({ user, leagues }) => {
  return (
    <div className="innerBottomPanel" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText">Leagues</p>
      <hr />
      <div>
        {leagues.map(league =>
          <div key={league._id}>
            <div>
              {!!leagues.length && <div>
                {leagues.map(league =>
                  <div key={league._id} className="columns">
                    <div className="column is-one-half">
                      <Link to={'/leagues'} className="standardText size20">{league.leagueName}</Link>
                    </div>
                    {league.users
                      .filter(leagueUser => leagueUser.userId._id === user._id)
                      .map(leagueuser =>
                        <div className="column is-one-half" key={leagueuser._id}>
                          <p className="standardText size20">Position: {leagueuser.position}</p>
                        </div>
                      )}
                  </div>)}
              </div>}
            </div>
          </div>
        )}
      </div>
      <div>
        <Link to={'/leagues/new'} className='button standardText editProfile' style={{
          backgroundColor:
        user.favouriteTeam ?
          `${user.favouriteTeam.primaryColor}` : '#D50A0A',
          color: user.favouriteTeam ?
            `${user.favouriteTeam.secondaryColor}` : '#013369'
        }}>Create a League</Link>
      </div>
    </div>
  );
};

export default LeagueDisplay;
