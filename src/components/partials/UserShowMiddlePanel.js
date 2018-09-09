import React from 'react';
import { Link } from 'react-router-dom';

import LineChart from '../common/LineChart';

const MiddlePanel = ({ user, week }) => {
  return (
    <div className="middleProfileContainer" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <div className="topPanelTopLine">
        <p className="standardText">Week By Week</p>
      </div>
      <hr />
      <div className="lineChartContainer">
        <LineChart className="lineChartContainer"
          user={user}
          weeks={week}
        />
        <div className="scoreByWeekContainer">
          {week.map((week, index, array) =>
            <div className="scoreByWeek" key={week}>
              <p>Week {week}</p>
              <p
                className="highlightText size30"
                style={{
                  color: user.favouriteTeam ?
                    `${user.favouriteTeam.secondaryColor}` : '#013369'
                }}
              >{user.picks.filter(pick => pick.week === week.toString()).reduce((total, pick) => total + pick.pointsScored, 0)}</p>
              <p>
                {array[array.length - 1] === week &&
                    <Link to={`/fixtures/picks/${week}`}>Make PICKS</Link>
                }
                {array[array.length - 1] !== week &&
                    <Link to={`/fixtures/picks/history/${week}`}>View PICKS</Link>
                }
              </p>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
