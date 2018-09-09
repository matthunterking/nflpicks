import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ user, weeks }) => {
  let colors;
  user.favouriteTeam ? colors = {
    primaryColor: user.favouriteTeam.primaryColor,
    secondaryColor: user.favouriteTeam.secondaryColor
  } : colors = { primaryColor: 'red', secondaryColor: 'blue' };
  console.log('colors --->', colors);
  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: `${colors.primaryColor}`,
        borderColor: `${colors.primaryColor}`,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `${colors.secondaryColor}`,
        pointBackgroundColor: `${colors.secondaryColor}`,
        pointBorderWidth: 0,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: `${colors.secondaryColor}`,
        pointHoverBorderColor: `${colors.secondaryColor}`,
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHitRadius: 10,
        data: weeks.slice(0, weeks.length - 1).map(week => user.picks.filter(pick => pick.week === week.toString()).reduce((total, pick) => total + pick.pointsScored, 0))
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ]
    },
    yAxes: [
      {
        display: false,
        labels: {
          show: false
        }
      }
    ]
  };


  return (
    <div className="doughnutChart">
      {data &&
      <Line data={data} options={chartOptions}/>
      }
    </div>
  );
};

export default LineChart;
