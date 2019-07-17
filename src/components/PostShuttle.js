import React from 'react';

export default class PostShuttle extends React.Component {
  state = {
    error: undefined
  };
  handlePostShuttle = (e) => {
    e.preventDefault();

    const shuttle = e.target.elements.shuttle.value.trim();
    const error = this.props.handlePostShuttle(shuttle);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.shuttle.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handlePostShuttle}>
          <input type="text" name="shuttle" />
          <button>Post Shuttle</button>
        </form>
      </div>
    );
  }
}