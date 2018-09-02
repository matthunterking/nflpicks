import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Fix this filter thing

const LeagueDisplay = ({ user, leagues }) => {
  const myPositions = leagues.map(league => league.users).filter(leagueUsers => leagueUsers.filter(leagueUser => leagueUser.userId._id === user._id));
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
                {myPositions.map(po => <p key={po._id}>{po[0].position}</p>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeagueDisplay;
