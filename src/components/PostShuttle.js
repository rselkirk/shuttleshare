import React from 'react';

export default class PostShuttle extends React.Component {
  state = {
    error: undefined
  };
  handlePostShuttle = (e) => {
    e.preventDefault();

    const shuttle = [e.target.elements.from.value.trim(), e.target.elements.destination.value.trim()];
    // const shuttle = {"from": e.target.elements.from.value.trim(), e.target.elements.destination.value.trim(), e.target.elements.spots.value.trim()];
    const error = this.props.handlePostShuttle(shuttle);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.from.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handlePostShuttle}>
          <label>
            From:
            <input type="text" name="from" />
          </label>
          <label>
            To:
            <input type="text" name="destination" />
          </label>
          <label>
            Spots:
            <input type="text" name="spots" />
          </label>
          <button>Post Shuttle</button>
        </form>
      </div>
    );
  }
}