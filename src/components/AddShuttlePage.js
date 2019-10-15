import React from 'react';
import { connect } from 'react-redux';
import ShuttleForm from './ShuttleForm';
import { addShuttle } from '../actions/shuttles';

export class AddShuttlePage extends React.Component {
  onSubmit = (shuttle) => {
    this.props.addShuttle(shuttle);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Shuttle</h1>
        <ShuttleForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addShuttle: (shuttle) => dispatch(addShuttle(shuttle))
});

export default connect(undefined, mapDispatchToProps)(AddShuttlePage);