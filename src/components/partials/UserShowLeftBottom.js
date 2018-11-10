import React from 'react';

const LeftBottomPanel = ({user, weeks}) => {
  const scoreData = weeks.slice(0, weeks.length - 1).map(week => user.picks.filter(pick => pick.week === week.toString()).reduce((total, pick) => total + pick.pointsScored, 0));
  console.log('this is scoreData on the component', scoreData);
  return(
    <div className="leftProfileContainer" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      {scoreData.map((score, index) =>
        <div className="scoreSummary" key={index}>
          <p>Week {index + 1}</p>
          <p
            className="highlightText size30"
            style={{
              color: user.favouriteTeam ?
                `${user.favouriteTeam.secondaryColor}` : '#013369'
            }}
          >{score}</p>
        </div>
      )}
    </div>
  );
};

export default LeftBottomPanel;
