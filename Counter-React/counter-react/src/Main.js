import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="row justify-content-center">

        <div className = "col-md-4" style={{ marginTop: "150px", border: "5px solid black", padding: "20px"}}>
          <h1>React Counter</h1>

          <h1>0</h1>

          <div className = "d-flex justify-content-center"> 
          <button className="btn btn-success">INCREMENT</button>
          <button className="btn btn-danger">DECREMENT</button>
          <button className="btn btn-primary">NEUTRAL</button>
</div>
        </div>
      </div>
    );
  }
}

export default Main;
