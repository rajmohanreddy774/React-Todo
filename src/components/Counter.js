import React from "react";
import Header from "./Header";
import "../style/counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    return (
      <div className="count-main">
        <Header />
        <div className="count-div">
          <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
          <div>
            <h1>{this.state.counter}</h1>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
  }
}

export default Counter;
