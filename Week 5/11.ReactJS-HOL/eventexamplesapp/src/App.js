import React from "react";
import CurrencyConverter from "./CurrencyConverter"
class App extends React.Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  sayHello = () => {
    alert("Hello");
  };
  handleIncrement = () => {
    this.increment();
    this.sayHello(); 
  };
  sayWelcome = (msg) => {
    alert(msg);
  };
  onPress = () => {
    alert("I was clicked");
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>
        <button onClick={this.onPress}>Click on me</button>
        <hr />
        <CurrencyConverter />
      </div>
    );
  }
}
export default App;
