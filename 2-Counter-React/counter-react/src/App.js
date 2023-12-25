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

  function getColor(count) {
    const maxTemp = 10;
    const minTemp = -10;
    const normTemp = (count - minTemp) / (maxTemp - minTemp);

    const red = Math.round(normTemp * 150);
    const blue = Math.round((1 - normTemp) * 100);
    
    return `rgb(${red}, ${100}, ${blue})`;
  }

  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-md-4" style={{backgroundColor: getColor(count)}}>
          <h1>React Counter</h1>

          <h1>{count}</h1>

          <div className="d-flex justify-content-center">
            
            <button className="btn btn-success" onClick={increment}>INCREMENT</button>

            <button className="btn btn-danger" onClick={decrement}>DECREMENT</button>

            <button className="btn btn-primary" onClick={neutral}>RESET TO 0°</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
