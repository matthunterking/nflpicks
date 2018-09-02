import React from 'react';

const LockDisplay = ({ user, teams }) => {
  return (
    <div className="innerBottomPanel" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText">Locks</p>
      <hr />
      <div className="lockContainer">
        {teams.sort((a, b) => {
          if(a.division < b.division) return -1;
          if(a.division > b.division) return 1;
          return 0;
        }).map(team =>
          <div
            className="column is-2 lockBox"
            key={team._id}
            style={{
              backgroundImage: `url(/assets/images/${team.logo})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              padding: '0px',
              filter:
              user.locks.includes(team._id) ?
                'grayscale(100%)' : 'grayscale(0%)',
              backgroundColor: `${team.primaryColor}`
            }}>
            {user.locks.includes(team._id) && <div style={{
              backgroundImage: 'url(./assets/images/lock.png)',
              backgroundSize: 'contain',
              width: '50px',
              filter: 'grayscale(0%)',
              minHeight: '50px',
              position: 'absolute'
            }}>

            </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default LockDisplay;
