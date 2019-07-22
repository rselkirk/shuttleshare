import React from 'react';

export default class PostShuttle extends React.Component {
  state = {
    error: undefined
  };
  handlePostShuttle = (e) => {
    e.preventDefault();

    const shuttle = { "from": e.target.elements.from.value.trim(), "to": e.target.elements.destination.value.trim(), "spots": e.target.elements.spots.value.trim()};
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
            <input type="text" name="from"/>
          </label>
          <label>
            To:
            <input type="text" name="destination"/>
          </label>
          <label>
            Date:
            <input type="text" name="date"/>
          </label>
          <label>
            Time:
            <input type="text" name="time"/>
          </label>
          <label>
            Spots:
            <input type="text" name="spots"/>
          </label>
          <label>
            Cost:
            <input type="text" name="cost"/>
          </label>
          
          <button>Post Shuttle</button>
        </form>
      </div>
    );
  }
}