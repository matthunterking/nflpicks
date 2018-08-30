import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ user, weeks }) => {
  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: `${user.favouriteTeam.primaryColor}`,
        borderColor: `${user.favouriteTeam.primaryColor}`,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `${user.favouriteTeam.secondaryColor}`,
        pointBackgroundColor: `${user.favouriteTeam.secondaryColor}`,
        pointBorderWidth: 0,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: `${user.favouriteTeam.secondaryColor}`,
        pointHoverBorderColor: `${user.favouriteTeam.secondaryColor}`,
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
      <Line data={data} options={chartOptions}/>
    </div>
  );
};

export default LineChart;
