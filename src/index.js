import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  countRef.current = count;

  useEffect(() => {
    setTimeout(() => {
      alert("Don't ping me " + countRef.current);
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
