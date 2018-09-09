import React from 'react';
import { Link } from 'react-router-dom';

const Admin = ({ weeks }) => {
  return (
    <div>
      <p>THIS IS THE ADMIN PANEL</p>
      <Link to={`/fixtures/results/${weeks[weeks.length -2]}`}>Set results</Link>
      <Link to="/fixtures/new">Add a fixture</Link>
    </div>

  );
};

export default Admin;
