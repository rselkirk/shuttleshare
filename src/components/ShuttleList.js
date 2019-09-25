import React from 'react';
import { connect } from 'react-redux';
import ShuttleListItem from './ShuttleListItem';

const ShuttleList = (props) => (
  <div>
    <h1>Shuttle List</h1>
    {props.shuttles.map((shuttle) => {
      return <ShuttleListItem key={shuttle.id} {...shuttle} />
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    shuttles: state.shuttles
  };
};

export default connect(mapStateToProps)(ShuttleList);
