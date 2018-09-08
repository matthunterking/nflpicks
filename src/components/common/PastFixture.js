import React from 'react';

const PastFixture = ({ fixture, user }) => {

  const pick = user.picks.filter(pick => pick.gameId._id === fixture.id)[0];
  const awayWin = fixture.winner === fixture.awayTeam._id;
  const homeWin = fixture.winner === fixture.homeTeam._id;

  return (
    <div className="fixtureContainer">
      <div className="team">
        <div className="innerTeam" style={{
          backgroundColor:
          awayWin ? fixture.awayTeam.primaryColor : 'grey'
        }}>
          {/* <button
            className="lockedButton"
          >
          </button> */}
          <p className="standardText">{fixture.awayTeam.name}</p>
        </div>
        {pick.winnerPick._id === fixture.awayTeam._id && <p className="standardText">
          You picked the {fixture.awayTeam.name}
        </p>}
      </div>

      <div className="at">AT</div>

      <div className="team teamRight">
        <div className="innerTeam innerTeamRight" style={{
          backgroundColor:
          homeWin ? fixture.homeTeam.primaryColor : 'grey'
        }}>
          <p className="standardText">{fixture.homeTeam.name}</p>
        </div>
        {pick.winnerPick._id === fixture.homeTeam._id && <p className="standardText">
          You picked the {fixture.homeTeam.name}
        </p>}
      </div>

      <button
        className="PickButton FixtureButtonRight standardText button"
        style={{
          backgroundColor:
          pick.pointsScored === 5 ? 'gold' : pick.pointsScored === 0 ? 'red' : 'green'
        }}
      >
        {pick.pointsScored}
      </button>

    </div>
  );
};

export default PastFixture;
