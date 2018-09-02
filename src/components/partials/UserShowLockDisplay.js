import React from 'react';

import Locks from '../common/Locks';

const LockDisplay = ({ user, teams }) => {
  return (
    <div className="innerBottomPanel" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText">Locks</p>
      <hr />
      <Locks user={user} teams={teams}/>
    </div>
  );
};

export default LockDisplay;
