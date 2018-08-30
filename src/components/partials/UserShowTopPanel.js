import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';

const TopPanel = ({ user, week, scoreData, lockData, chartOptions}) => {
  return (
    <div className="column is-four-fifths topProfileContainer" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <p className="standardText">Hello {user.name}</p>
      <hr />
      <div className="statsContainer">
        <div className="stats">
          <p className="standardText">Current Score</p>
          <div className="innerStats">
            <CountUp
              className="highlightText size100"
              start={0} end={user.score} duration={2}
              style={{
                color: user.favouriteTeam ?
                  `${user.favouriteTeam.secondaryColor}` : '#013369'}}
            />
            <p className="highlightText size30" style={{
              color: user.favouriteTeam ?
                `${user.favouriteTeam.secondaryColor}` : '#013369'}}>
              <span className="pointerSmall">&#9650;</span>
              <CountUp
                start={0}
                end={user.picks.filter(pick =>
                  pick.week === week[week.length - 2].toString())
                  .reduce((total, pick) => total + pick.pointsScored, 0)}
                duration={4}/>
            </p>
            <p className="standardText">Latest Points</p>
          </div>
        </div>
        <Doughnut data={scoreData} options={chartOptions}/>
        <Doughnut data={lockData} options={chartOptions}/>
      </div>
    </div>
  );
};

export default TopPanel;
