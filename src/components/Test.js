import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "world" };
  }

  componentWillMount() {
    console.log("componentWillmount()");
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  changeState() {
    this.setState({ hello: "bsf" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <br />
        <h2>
          <a href="/" onClick={this.changeState.bind(this)}>
            Click here
          </a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default Test;
