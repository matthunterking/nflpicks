import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <p>DASHBOARD</p>
      <div className="columns">
        <div className="column is-one-half">
          <p>MAKE PICKS</p>
          <Link to="/fixtures/picks/week/1">Make picks for Week 1</Link>
          <Link to="/fixtures/picks/week/2">Make picks for Week 2</Link>
          <Link to="/fixtures/picks/week/3">Make picks for Week 3</Link>
          <Link to="/fixtures/picks/week/4">Make picks for Week 4</Link>
          <Link to="/fixtures/picks/week/5">Make picks for Week 5</Link>
          <Link to="/fixtures/picks/week/6">Make picks for Week 6</Link>
          <Link to="/fixtures/picks/week/7">Make picks for Week 7</Link>
          <Link to="/fixtures/picks/week/8">Make picks for Week 8</Link>
          <Link to="/fixtures/picks/week/9">Make picks for Week 9</Link>
          <Link to="/fixtures/picks/week/10">Make picks for Week 10</Link>
          <Link to="/fixtures/picks/week/11">Make picks for Week 11</Link>
          <Link to="/fixtures/picks/week/12">Make picks for Week 12</Link>
          <Link to="/fixtures/picks/week/13">Make picks for Week 13</Link>
          <Link to="/fixtures/picks/week/14">Make picks for Week 14</Link>
          <Link to="/fixtures/picks/week/15">Make picks for Week 15</Link>
          <Link to="/fixtures/picks/week/16">Make picks for Week 16</Link>
          <Link to="/fixtures/picks/week/17">Make picks for Week 17</Link>
        </div>
        <div className="column is-one-half">
          <p>SET RESULTS</p>
          <Link to="/fixtures/results/1">Set Results for Week 1</Link>
          <Link to="/fixtures/results/2">Set Results for Week 2</Link>
          <Link to="/fixtures/results/week">Make picks for Week 3</Link>
          <Link to="/fixtures/results/week">Make picks for Week 4</Link>
          <Link to="/fixtures/results/week">Make picks for Week 5</Link>
          <Link to="/fixtures/results/week">Make picks for Week 6</Link>
          <Link to="/fixtures/results/week">Make picks for Week 7</Link>
          <Link to="/fixtures/results/week">Make picks for Week 8</Link>
          <Link to="/fixtures/results/week">Make picks for Week 9</Link>
          <Link to="/fixtures/results/week">Make picks for Week 10</Link>
          <Link to="/fixtures/results/week">Make picks for Week 11</Link>
          <Link to="/fixtures/results/week">Make picks for Week 12</Link>
          <Link to="/fixtures/results/week">Make picks for Week 13</Link>
          <Link to="/fixtures/results/week">Make picks for Week 14</Link>
          <Link to="/fixtures/results/week">Make picks for Week 15</Link>
          <Link to="/fixtures/results/week">Make picks for Week 16</Link>
          <Link to="/fixtures/results/week">Make picks for Week 17</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
