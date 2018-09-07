import React from 'react';

const Fixture = ({ fixture, handleClick, handleLock, picks, user, handleUnlock }) => {

//TODO: 2. fix line 7 and 8 so we don't used locked anymore

  const otherLocked = !!picks.filter(pick => pick.lock && pick.gameId !== fixture.id.toString()).length;
  const thisLocked = !!picks.filter(pick => pick.lock && pick.gameId === fixture.id.toString()).length;

  const availableToLockAway = !user.locks.includes(fixture.awayTeam._id);
  const availableToLockHome = !user.locks.includes(fixture.homeTeam._id);

  const awayPicked = !!picks.filter(pick => pick.winnerPick === fixture.awayTeam._id.toString()).length;
  const homePicked = !!picks.filter(pick => pick.winnerPick === fixture.homeTeam._id.toString()).length;

  const awayLocked = !!picks.filter(pick => pick.lock && pick.winnerPick === fixture.awayTeam._id.toString()).length;
  const homeLocked = !!picks.filter(pick => pick.lock && pick.winnerPick === fixture.homeTeam._id.toString()).length;

  console.log('otherLocked', otherLocked);

  return (
    <div className="fixtureContainer">
      {(!awayPicked && !thisLocked) && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="PickButton FixtureButtonLeft standardText button"
      >
        Pick
      </button>}

      {awayPicked && !awayLocked && (!availableToLockAway || otherLocked) && <button
        className="inactive FixtureButtonLeft standardText button"
      >
        Picked
      </button>}


      {awayPicked && !awayLocked && availableToLockAway && !otherLocked && <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="LockButton FixtureButtonLeft standardText button"
      >
        Lock
      </button>}

      {awayPicked && awayLocked && <button
        onClick={handleUnlock}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="inactive FixtureButtonLeft standardText button"
      >
      </button>}

      {homePicked && homeLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.awayTeam._id}
        loser={fixture.homeTeam._id}
        className="PickButton FixtureButtonLeft standardText button"
      >
        Pick
      </button>}

      <div className="team">
        <div className="innerTeam" style={{
          backgroundColor:
          fixture.awayTeam.primaryColor
        }}>
          {awayPicked && awayLocked && <button
            onClick={handleUnlock}
            game={fixture.id}
            winner={fixture.awayTeam._id}
            loser={fixture.homeTeam._id}
            className="lockedButton"
          >
          </button>}
          <p className="standardText">{fixture.awayTeam.name}</p>
        </div>
        <p className="standardText">&#9432; Past picks:{' '}
          {user.picks.filter(pick => pick.winnerPick._id === fixture.awayTeam._id).length}
          {' '}  Record: {' '}
          {fixture.awayTeam.record.wins.length} - {fixture.awayTeam.record.loss.length} - {fixture.awayTeam.record.tie.length}
        </p>
      </div>

      <div className="at">AT</div>


      <div className="team teamRight">
        <div className="innerTeam innerTeamRight" style={{
          backgroundColor:
          fixture.homeTeam.primaryColor
        }}>
          {homePicked && homeLocked && <button
            onClick={handleUnlock}
            game={fixture.id}
            winner={fixture.homeTeam._id}
            loser={fixture.awayTeam._id}
            className="lockedButton"
          >
          </button>}
          <p className="standardText">{fixture.homeTeam.name}</p>
        </div>
        <p className="standardText">&#9432; Past picks:{' '}
          {user.picks.filter(pick => pick.winnerPick._id === fixture.homeTeam._id).length}
          {' '}  Record: {' '}
          {fixture.homeTeam.record.wins.length} - {fixture.homeTeam.record.loss.length} - {fixture.homeTeam.record.tie.length}
        </p>
      </div>


      {(!homePicked && !thisLocked) && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}
        className="PickButton FixtureButtonRight standardText button"
      >
        Pick
      </button>}

      {homePicked && !homeLocked && (!availableToLockHome || otherLocked) && <button
        onClick={handleUnlock}
        className="inactive FixtureButtonRight standardText button"
      >
        Picked!
      </button>}


      {homePicked && !homeLocked && availableToLockHome && !otherLocked && <button
        onClick={handleLock}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}
        className="LockButton FixtureButtonRight standardText button"
      >
        Lock
      </button>}

      {homePicked && homeLocked && <button
        onClick={handleUnlock}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}
        className="inactive FixtureButtonRight standardText button"
      >
      </button>}

      {awayPicked && awayLocked && <button
        onClick={handleClick}
        game={fixture.id}
        winner={fixture.homeTeam._id}
        loser={fixture.awayTeam._id}
        className="PickButton FixtureButtonRight standardText button">
        Pick
      </button>}

    </div>
  );
};

export default Fixture;
