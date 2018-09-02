import React from 'react';
import Team from '../common/Team';

const Fixture = ({ fixture, handleClick, handleLock, picks }) => {
  // const pickActive = !picks.filter(pick => pick.gameId === fixture.id.toString()).length;
  // const lockActive = !picks.filter(pick => pick.gameId === fixture.id.toString() && pick.lock).length;
  // const selectedTeam = !pickActive ? picks.filter(pick => pick.gameId === fixture.id.toString())[0].winnerPick : '';
  // console.log('this is a fixture', pickActive, lockActive, selectedTeam);

  console.log('test 1', picks.filter(pick => pick.gameId === fixture.id.toString()).length);
  console.log('test 2', picks, picks.filter(pick => pick.winnerPick === fixture.awayTeam._id.toString()).length);
  console.log('test 3', picks.filter(pick => pick.lock).length);
  console.log('pick = F, F, F', 'Lock = T, T, F', 'Unlock = T, T, T');

//TODO: 1. MAKE AWAY BUTTON A FUNCTION TO DECIDE WHAT BUTTON NEEDS TO BE THERE
//TODO: 2. MAKE A HANDLE UNLOCK FEATURE

  const awayButton =
    picks.filter(pick => pick.gameId === fixture.id.toString()).length &&
    picks.filter(pick => pick.winnerPick === fixture.awayTeam._id).length &&
    picks.filter(pick => pick.lock).length ?
      'unlock button' : picks.filter(pick => pick.gameId === fixture.id.toString()).length &&
      picks.filter(pick => pick.winnerPick === fixture.awayTeam._id).length ?
        'lock button' : 'pick button';

  console.log(awayButton);
  return (
    <div className="fixtureContainer">
      <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        Pick
      </button>
      <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        Lock
      </button>
      <Team team={fixture.awayTeam} />
      <div>AT</div>
      <Team team={fixture.homeTeam} />
      <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}>
        Pick
      </button>
      <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}>
        Lock
      </button>
    </div>
  );
};

export default Fixture;
