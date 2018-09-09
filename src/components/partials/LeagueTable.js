import React from 'react';

const LeagueTable = ({ user, league, weeks }) => {
  const previousWeeks = weeks.slice(0, weeks.length -1);
  return (
    <div className="middleProfileContainer" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText size30">{league.leagueName}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            {previousWeeks.map((week, index) =>
              <th key={index}>Week {week}</th>
            )}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {league.users.sort((a, b) => {
            if(a.score < b.score) return -1;
            if(a.score > b.score) return 1;
            return 0;
          }).map(user =>
            <tr key={user._id}>
              <td>{user.position}</td>
              <td>{user.userId.name}</td>
              {previousWeeks.map((week, index) =>
                <td key={index}>{user.userId.picks.filter(pick => pick.week === week.toString()).reduce((total, pick) => total + pick.pointsScored, 0)}</td>
              )}
              <td>{user.userId.score}</td>
            </tr>)}
        </tbody>
      </table>
      <p>Send this link to invite someone to this league <span>https://nfl-picks-game.herokuapp.com/leagues/{league.id}/join</span></p>
    </div>
  );
};

export default LeagueTable;
