import React from 'react';
import { connect } from 'react-redux';
import ShuttleForm from './ShuttleForm';
import { addShuttle } from '../actions/shuttles';

const AddShuttlePage = (props) => (
  <div>
    <h1>Add Shuttle</h1>
    <ShuttleForm 
      onSubmit={(shuttle) => {
        props.dispatch(addShuttle(shuttle));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddShuttlePage);