import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ currentWeek }) => {
  return (
    <div className="subMenu">
      <Link className="standardText subNavItem" to="/dashboard">HOME</Link>
      <Link className="standardText subNavItem" to={`/fixtures/picks/${currentWeek}`}>PICKS</Link>
      <Link className="standardText subNavItem" to="/leagues">LEAGUES</Link>
    </div>
  );
};

export default SubMenu;
