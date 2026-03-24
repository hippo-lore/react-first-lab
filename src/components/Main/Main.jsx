import "./Main.css";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <h1>Мій перший React проєкт</h1>
      <p>Кількість натискань: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Натисни
      </button>
    </main>
  );
}

export default Main;