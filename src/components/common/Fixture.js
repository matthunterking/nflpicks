import React from 'react';

const Fixture = ({ fixture, handleClick, handleLock, picks, locked, user }) => {

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

  return (
    <div className="fixtureContainer">
      {(!awayPicked && !thisLocked) && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="PickButton FixtureButton standardText button"
      >
        Pick
      </button>}

      {awayPicked && !awayLocked && (!availableToLockAway || otherLocked) && <button
        className="inactive FixtureButton standardText button"
      >
        Picked
      </button>}


      {awayPicked && !awayLocked && availableToLockAway && !otherLocked && <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="LockButton FixtureButton standardText button"
      >
        Lock
      </button>}

      {awayPicked && awayLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="inactive FixtureButton standardText button"
      >
      </button>}

      {homePicked && homeLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}>
        Unlock and pick
      </button>}

      <div>
        <p>{fixture.awayTeam.name}</p>
      </div>

      <div>AT</div>
      <div>
        <p>{fixture.homeTeam.name}</p>
      </div>


      {(!homePicked && !thisLocked) && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}
        className="PickButton FixtureButton standardText button"
      >
        Pick
      </button>}

      {homePicked && !homeLocked && (!availableToLockHome || otherLocked) && <button>
        Picked!
      </button>}


      {homePicked && !homeLocked && availableToLockHome && !otherLocked && <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}
        className="LockButton FixtureButton standardText button"
      >
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
