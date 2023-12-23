import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };

  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  neutral = () => {
    this.setState({ number: 0 });
  };
  render() {
    return (
      <div className="row justify-content-center">
        <div
          className="col-md-4"
          style={{
            marginTop: "150px",
            border: "5px solid black",
            padding: "20px",
          }}
        >
          <h1>React Counter</h1>

          <h1>{this.state.number}</h1>

          <div className="d-flex justify-content-center">
            <button className="btn btn-success" onClick={this.increment}>
              INCREMENT
            </button>
            <button className="btn btn-danger" onClick={this.decrement}>
              DECREMENT
            </button>
            <button className="btn btn-primary" onClick={this.neutral}>
              NEUTRAL
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
