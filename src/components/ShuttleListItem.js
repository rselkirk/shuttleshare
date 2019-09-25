import React from 'react';
import { Link } from 'react-router-dom';

const ShuttleListItem = ({ id, origin, destination, date, time, spots, cost }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{origin}</h3>
      <h3>{destination}</h3>
    </Link>
    <p>{date} - {time}</p>
  </div>
);

export default ShuttleListItem;