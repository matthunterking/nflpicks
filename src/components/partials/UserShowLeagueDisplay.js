import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Fix this filter thing

const LeagueDisplay = ({ user, leagues }) => {
  console.log(leagues.map(league => league.users.filter(leagueUser => leagueUser.userId.toString() === user._id.toString())));
  return (
    <div style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText">Leagues</p>
      <hr />
      <div>
        {leagues.map(league =>
          <div key={league._id}>
            <Link to={`/leagues/${league._id}`}>{league.leagueName}</Link>
            <div>
              <div>
                <p>POSITION</p>
                <p></p>
                <p>Score</p>
              </div>
              <div>
                {league.users.filter(leagueUser => leagueUser.userId.toString() === user._id.toString())}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeagueDisplay;
