import React from "react";
import "../style/Show.scss";

class Show extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.item.map((ele, index) => (
            <div className="show-main">
              {" "}
              <div>
                <h3>
                  {index + 1}:{ele}
                </h3>
              </div>
              <button
                className="btn"
                onClick={this.props.removeTask.bind(this, index)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Show;
