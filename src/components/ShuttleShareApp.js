import React from 'react';
import ShuttleForm from './ShuttleForm';
import Shuttles from './Shuttles';

export default class ShuttleShareApp extends React.Component {
  state = {
    shuttles: [
      { id: '3', from: "Rossland", to: "BS", date: "Aug 2", time: "10:00am", spots: 2, cost: "$5" },
      { id: '4', from: "Rossland", to: "Malde Creek FSR - Bottom", date: "Aug 1", time: "3:00pm", spots: 3, cost: "$5" },
    ]};

  handlePostShuttle = (shuttle) => {
    if (!shuttle) {
      return 'Enter valid value to add shuttle';
    } else if (this.state.shuttles.indexOf(shuttle) > 1) {
      return 'This shuttle already exists';

    }
    this.setState((prevState) => ({ shuttles: [...prevState.shuttles, shuttle] }));
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
        <Shuttles
          shuttles={this.state.shuttles}
          handleDeleteShuttle={this.handleDeleteShuttle}
        />
        <ShuttleForm 
          handlePostShuttle={this.handlePostShuttle}
        />
      </div>
    );
  }
}