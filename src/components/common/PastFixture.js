import React from 'react';

const PastFixture = ({ fixture, user }) => {

  const pick = user.picks.filter(pick => pick.gameId._id === fixture.id)[0];
  const awayWin = fixture.winner === fixture.awayTeam._id;
  const homeWin = fixture.winner === fixture.homeTeam._id;

  return (
    <div className="fixtureContainer">
      <div className="team teamRight">
        <div className="innerTeam innerTeamRight" style={{
          filter:
            awayWin ? 'grayscale(0%)' : 'grayscale(100%)',
          flexDirection: 'column',
          backgroundImage:
              `url(/assets/images/${fixture.awayTeam.fixtureImage})`
        }}>
          <p className="standardText size20"
            style={{
              color: fixture.awayTeam.textColor
            }}
          >{fixture.awayTeam.name.substring(0, fixture.awayTeam.name.lastIndexOf(' '))}</p>
          <p className="highlightText size30">
            {fixture.awayTeam.name.substring(fixture.awayTeam.name.lastIndexOf(' '))}
          </p>
        </div>
        {(homeWin || awayWin) && pick.winnerPick._id === fixture.awayTeam._id && <p className="highlightText"
          style={{
            color: awayWin ? 'Green' : 'Red'
          }}>
            You {awayWin ? 'correctly ' : 'incorrectly '}picked the {fixture.awayTeam.name}
        </p>}
        {(!homeWin && !awayWin) && pick.winnerPick._id === fixture.awayTeam._id && <p className="highlightText">
            You picked the {fixture.awayTeam.name} RESULT PENDING
        </p>}

      </div>

      <div className="at" style={{position: 'relative', left: '0%'}}></div>

      <div className="team teamRight">
        <div className="innerTeam innerTeamRight" style={{
          filter:
          homeWin ? 'grayscale(0%)' : 'grayscale(100%)',
          flexDirection: 'column',
          backgroundImage:
            `url(/assets/images/${fixture.homeTeam.fixtureImage})`
        }}>
          <p className="standardText size20"
            style={{
              color: fixture.homeTeam.textColor
            }}
          >{fixture.homeTeam.name.substring(0, fixture.homeTeam.name.lastIndexOf(' '))}</p>
          <p className="highlightText size30">
            {fixture.homeTeam.name.substring(fixture.homeTeam.name.lastIndexOf(' '))}
          </p>
        </div>
        {(homeWin || awayWin) && pick.winnerPick._id === fixture.homeTeam._id && <p className="highlightText"
          style={{
            color: homeWin ? 'Green' : 'Red'
          }}>
            You {homeWin ? 'correctly ' : 'incorrectly '}picked the {fixture.homeTeam.name}
        </p>}
        {(!homeWin && !awayWin) && pick.winnerPick._id === fixture.homeTeam._id && <p className="highlightText">
            You picked the {fixture.homeTeam.name}  RESULT PENDING
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
