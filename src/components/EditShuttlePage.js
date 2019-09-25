import React from 'react';
import { connect } from 'react-redux';
import ShuttleForm from './ShuttleForm';
import { editShuttle, removeShuttle } from '../actions/shuttles';

const EditShuttlePage = (props) => {
  return (
    <div>
      <ShuttleForm
        shuttle={props.shuttle}
        onSubmit={(shuttle) => {
          props.dispatch(editShuttle(props.shuttle.id, shuttle));
          props.history.push('/');
          console.log('updated', shuttle);
        }}
      />
      <button onClick={(shuttle) => {
        props.dispatch(removeShuttle({ id: props.shuttle.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStatetoProps = (state, props) => {
  return {
    shuttle: state.shuttle.find((shuttle) => shuttle.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps)(EditShuttlePage);
