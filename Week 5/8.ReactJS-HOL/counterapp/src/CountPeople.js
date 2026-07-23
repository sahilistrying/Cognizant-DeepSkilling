import React from "react";
class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }
  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };
  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Counter App</h2>
        <h3>People Entered: {this.state.entryCount}</h3>
        <button onClick={this.updateEntry}>Login</button>
        <h3>People Exited: {this.state.exitCount}</h3>
        <button onClick={this.updateExit}>Exit</button>
      </div>
    );
  }
}
export default CountPeople;
