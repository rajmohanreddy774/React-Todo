import React from "react";
import Counter from "./Counter";

class MainCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }
  render() {
    return (
      <div>
        {this.state.mount ? <Counter /> : null}
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
      </div>
    );
  }
}

export default MainCounter;
