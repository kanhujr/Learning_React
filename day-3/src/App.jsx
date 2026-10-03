import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );

  function Message(props) {
    return (
      <div>
        <p>
          You have read <strong>{props.count}</strong> pieces of advice
        </p>
      </div>
    );
  }
}

export default App;
