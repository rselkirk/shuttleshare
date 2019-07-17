import React from 'react';
import Header from './Header';
import PostShuttle from './PostShuttle';
import Shuttles from './Shuttles';

export default class ShuttleShareApp extends React.Component {
  state = {
    shuttles: []
  };

  handlePostShuttle = (shuttle) => {
    if (!shuttle) {
      return 'Enter valid value to add item';
    } else if (this.state.shuttles.indexOf(shuttle) > 1) {
      return 'This shuttle already exists';

    }
    this.setState((prevState) => ({ shuttles: prevState.shuttles.concat(shuttle) }));
  };
  handleDeleteShuttle = (shuttleToRemove) => {
    this.setState((prevState) => ({
      shuttles: prevState.shuttles.filter((shuttle) => shuttleToRemove !== shuttle)
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.shuttles.length !== this.state.shuttles.length) {
      const json = JSON.stringify(this.state.shuttles);
      localStorage.setItem('shuttles', json);
    }
  };

  render() {
    const subTitle = 'Rossland rideshare for people and bikes';
    return (
      <div>
        <Header subtitle={subTitle} />
        <Shuttles
          shuttles={this.state.shuttles}
          handleDeleteShuttle={this.handleDeleteShuttle}
        />
        <PostShuttle 
          handlePostShuttle={this.handlePostShuttle}
        />
      </div>
    );
  }
}