import React from 'react';
import Team from '../common/Team';

const Fixture = ({ fixture, handleClick, handleLock, picks, locked, user }) => {

  //has one of the other fixtures been locked?
  // console.log('Has one of the other fixtures been locked?',  locked && picks.filter(pick => pick.lock).filter(pick => pick.gameId === fixture.id.toString()).length);
  // console.log('in the fixture component fixture',  picks.filter(pick => pick.lock));

  // const pickActive = !picks.filter(pick => pick.gameId === fixture.id.toString()).length;
  // const lockActive = !picks.filter(pick => pick.gameId === fixture.id.toString() && pick.lock).length;
  // const selectedTeam = !pickActive ? picks.filter(pick => pick.gameId === fixture.id.toString())[0].winnerPick : '';
  // console.log('this is a fixture', pickActive, lockActive, selectedTeam);


//TODO: 1. MAKE AWAY BUTTON A FUNCTION TO DECIDE WHAT BUTTON NEEDS TO BE THERE
//TODO: 2. MAKE A HANDLE UNLOCK FEATURE

  const otherLocked = locked && !picks.filter(pick => pick.lock).filter(pick => pick.gameId === fixture.id.toString()).length;
  const thisLocked = locked && !!picks.filter(pick => pick.lock).filter(pick => pick.gameId === fixture.id.toString()).length;
  const thisPicked = !!picks.filter(pick => pick.gameId === fixture.id.toString()).length;

  const availableToLockAway = !user.locks.includes(fixture.awayTeam._id);
  const availableToLockHome = !user.locks.includes(fixture.homeTeam._id);

  const awayPicked = !!picks.filter(pick => pick.winnerPick === fixture.awayTeam._id.toString()).length;
  const homePicked = !!picks.filter(pick => pick.winnerPick === fixture.homeTeam._id.toString()).length;

  const awayLocked = locked === fixture.awayTeam._id.toString();
  const homeLocked = locked === fixture.homeTeam._id.toString();

  if(fixture._id.toString() === '5b841cb1a5b13ebb36eeeca5') {
    console.log('awayPicked', awayPicked, 'homePicked', homePicked, 'otherLocked', otherLocked, 'thisLocked', thisLocked, 'availableToLockAway', availableToLockAway, 'availableToLockHome', availableToLockHome, 'awayLocked', awayLocked);
  }
  return (
    <div className="fixtureContainer">
      {(!awayPicked && !thisLocked) && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        Pick
      </button>}

      {awayPicked && !awayLocked && (!availableToLockAway || otherLocked) && <button>
        Picked!
      </button>}


      {awayPicked && !awayLocked && availableToLockAway && !otherLocked && <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        Lock
      </button>}

      {awayPicked && awayLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        UnLock
      </button>}

      {homePicked && homeLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        Unlock and pick
      </button>}

      <Team team={fixture.awayTeam} />
      <div>AT</div>
      <Team team={fixture.homeTeam} />


      {(!homePicked && !thisLocked) && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}>
        Pick
      </button>}

      {homePicked && !homeLocked && (!availableToLockHome || otherLocked) && <button>
        Picked!
      </button>}


      {homePicked && !homeLocked && availableToLockHome && !otherLocked && <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}>
        Lock
      </button>}

      {homePicked && homeLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}>
        UnLock
      </button>}

      {awayPicked && awayLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}>
        Unlock and pick
      </button>}

    </div>
  );
};

export default Fixture;
