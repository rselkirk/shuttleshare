import React from 'react';

const Shuttle = (props) => {
  return (
    <div>
      {props.shuttleText}
      <button onClick={(e) => {
        props.handleDeleteShuttle(props.shuttleText);
      }}
      >
        Remove
      </button>
    </div>
  );
}

export default Shuttle;