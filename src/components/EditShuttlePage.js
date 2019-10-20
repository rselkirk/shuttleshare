import React from 'react';
import { connect } from 'react-redux';
import ShuttleForm from './ShuttleForm';
import { editShuttle, removeShuttle } from '../actions/shuttles';

export class EditShuttlePage extends React.Component {
  onSubmit = (shuttle) => {
    this.props.editShuttle(this.props.shuttle.id, shuttle);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeShuttle({ id: this.props.shuttle.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ShuttleForm
          shuttle={this.props.shuttle}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStatetoProps = (state, props) => ({
  shuttle: state.shuttles.find((shuttle) => shuttle.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editShuttle: (id, shuttle) => dispatch(editShuttle(id, shuttle)),
  removeShuttle: () => dispatch(removeShuttle(data))
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditShuttlePage);
