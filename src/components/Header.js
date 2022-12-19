import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="head-div">
        <h3>REACT TASK</h3>
        <div className="menu-div">
          {" "}
          <Link to="/todo">
            <button>Todo</button>
          </Link>
          <Link to="/counter">
            <button>Counter</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/main_counter">
            <button>LifeCycle</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
