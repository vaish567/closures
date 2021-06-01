import React, { useEffect, useRef, useState } from "react"; // we want latest value we are using "useRef" hook
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // idea here is I'm going to store the value of count inside of "countRef" reference. AlsoI have set default value "0"

  // as you can see I'm keeping track of reference "countRef.current" and it is same reference across the value, also I'm updating value here is the reference
  countRef.current = count;

  // So here in useEffect I might connect to WebSocket or maybe connecting to an API, maybe async operation
  // But Basically here I'm doing async operation on the first render, in this creating "setTimeOut" and displaying what the count is.
  // Getting value from count at the current point "countRef.current"
  useEffect(() => {
    setTimeout(() => {
      alert("Don't ping me " + countRef.current); // which is grabbing reference from here so that's key reference we're getting a reference to the value
    }, 3000);
  }, []);

  return (
    <div>
      <h4 style={{ color: "red" }}>Closure!</h4>
      <p>Enough {count} times</p>
      <button onClick={() => setCount(count + 1)}>Ping me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
