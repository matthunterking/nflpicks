import React from 'react';

const Locks = ({ user, teams }) => {
  console.log('-=-=-=->',teams.map(team => user.picks.filter(pick => pick.pointsScored === 5 && pick.winnerPick._id === team._id).length));
  return (
    <div className="lockContainer">
      {teams.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      }).map(team =>
        <div
          className="lockBox"
          key={team._id}
          style={{
            backgroundImage: `url(/assets/images/${team.logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '0px',
            backgroundColor:
            user.locks.includes(team._id) ?
              'gray' : `${team.primaryColor}`
          }}>
          {user.locks.includes(team._id) && <div style={{
            backgroundImage:
            user.picks.filter(pick => pick.pointsScored === 5 && pick.winnerPick._id === team._id).length ?
              'url(/assets/images/greenlock.png)' :
              user.picks.filter(pick => pick.pointsScored === 0 && pick.winnerPick._id === team._id).length ?
                'url(/assets/images/redLock.png)' : 'url(/assets/images/lock.png)',
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
  );
};

export default Locks;
