import React, { Component } from "react";
import GitClient from "./GitClient";
class App extends Component {
  state = {
    repos: [],
  };
  async componentDidMount() {
    const repos = await GitClient.getRepositories("techiesyed");
    this.setState({ repos });
  }
  render() {
    return (
      <div>
        <h2>Repositories</h2>
        <ul>
          {this.state.repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
