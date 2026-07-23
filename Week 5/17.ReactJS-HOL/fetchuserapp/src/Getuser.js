import React, { Component } from "react";
class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    const res = await fetch("https:
    const data = await res.json();
    this.setState({
      user: data.results[0],
    });
  }
  render() {
    return (
      <div>
        <h2>User Details</h2>
        <p>Title: {this.state.user.name?.title}</p>
        <p>First Name: {this.state.user.name?.first}</p>
        <img src={this.state.user.picture?.large} alt="User" />
      </div>
    );
  }
}
export default Getuser;

