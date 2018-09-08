import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ chartData, chartOptions, user, text }) => {
  const percentage = chartData.datasets[0].data[0] * 100;
  return (
    <div className="doughnutChart">
      <Doughnut data={chartData} options={chartOptions}/>
      <div className='doughnutChartText'>
        <p className="highlightText size30" style={{
          color: user.favouriteTeam ?
            `${user.favouriteTeam.secondaryColor}` : '#013369'}}>
          {percentage.toFixed(0)}%
        </p>
        <p className="standardText doughnutChartSubText">{text} success rate</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
