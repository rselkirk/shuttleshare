import React from 'react';
import Shuttle from './Shuttle';

const Shuttles = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteShuttle}>Remove All</button>
      {props.shuttles.length === 0 && <p>Please add a shuttle to get started</p>}
      {
        props.shuttles.map((shuttle) => (
          <Shuttle
            key={shuttle}
            shuttleText={shuttle}
            handleDeleteShuttle={props.handleDeleteShuttle}
          />
        ))
      }
    </div>
  );
};

export default Shuttles;