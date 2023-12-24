import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count+1);
  }

  function decrement() {
    setCount(count-1);
  }

  function neutral() {
    setCount(0);
  }

  return (
    <div className="App">
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

          <h1>{count}</h1>

          <div className="d-flex justify-content-center">
            <button className="btn btn-success" onClick={increment}>INCREMENT</button>

            <button className="btn btn-danger" onClick={decrement}>DECREMENT</button>

            <button className="btn btn-primary" onClick={neutral}>NEUTRAL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
