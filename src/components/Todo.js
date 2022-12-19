import React from "react";
import Show from "./Show";
import Header from "./Header";
import "../style/Todo.scss";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      val: "",
      item: [],
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      val: e.target.value,
    });
  };
  formHandler = (e) => {
    e.preventDefault();
    this.setState({
      val: "",
      item: [...this.state.item, this.state.val],
    });
  };

  deleteHandler = (e) => {
    const removeTask = [...this.state.item];
    removeTask.splice(e, 1);
    this.setState({
      item: removeTask,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <form className="form-div">
          <div>
            <input
              type="text"
              value={this.state.val}
              placeholder="Enter a Value"
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <button onClick={this.formHandler}> ADD todo</button>
          </div>
        </form>
        <div className="show-div">
          <Show removeTask={this.deleteHandler} item={this.state.item} />
        </div>
      </div>
    );
  }
}

export default Todo;
