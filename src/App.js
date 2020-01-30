import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class App extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT", operation: "add" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT", operation: "subtract" });
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="counter text-center">
            <h1>{this.props.title}</h1>
            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button className="input-group-text" onClick={this.decrement}>
                    -
                  </button>
                </div>
                <span className="form-control text-center">
                  {this.props.count}
                </span>
                <div className="input-group-append">
                  <button className="input-group-text" onClick={this.increment}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <small>{this.props.operation}</small>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    count: state.count,
    operation: state.operation
  };
};

export default connect(mapStateToProps)(App);
