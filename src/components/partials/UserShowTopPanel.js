import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

import DoughnutChart from '../common/DoughnutChart';

const TopPanel = ({ user, week, scoreData, lockData, chartOptions}) => {
  return (
    <div className="topProfileContainer" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <div className="topPanelTopLine">
        <p className="standardText">Hello {user.name}</p>
        <Link to={`/fixtures/picks/${week[week.length -1]}`} className='button standardText' style={{
          backgroundColor:
        user.favouriteTeam ?
          `${user.favouriteTeam.primaryColor}` : '#D50A0A',
          color: user.favouriteTeam ?
            `${user.favouriteTeam.secondaryColor}` : '#013369'
        }}>Make Picks</Link>
      </div>
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
        <DoughnutChart
          chartData={scoreData}
          chartOptions={chartOptions}
          user={user}
          text='Pick'
        />
        <DoughnutChart
          chartData={lockData}
          chartOptions={chartOptions}
          user={user}
          text='Lock'
        />
      </div>
    </div>
  );
};

export default TopPanel;
