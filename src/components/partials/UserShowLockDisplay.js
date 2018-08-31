import React from 'react';

const LockDisplay = ({ user, teams }) => {
  return (
    <div style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText">Locks</p>
      <hr />
      <div className="columns is-multiline">
        {teams.sort((a, b) => {
          if(a.division < b.division) return -1;
          if(a.division > b.division) return 1;
          return 0;
        }).map(team =>
          <div
            className="column is-2"
            key={team._id}
            style={{
              backgroundImage: `url(/assets/images/${team.logo})`,
              backgroundSize: 'cover',
              filter:
              user.locks.includes(team._id) ?
                'grayscale(100%)' : 'grayscale(0%)',
              backgroundColor: `${team.primaryColor}`,
              opacity:
              user.locks.includes(team._id) ?
                0.4 : 1
            }}>
            {user.locks.includes(team._id) && <div style={{
              backgroundImage: 'url(./assets/images/lock.png)',
              backgroundSize: 'contain'
            }}>

            </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default LockDisplay;
