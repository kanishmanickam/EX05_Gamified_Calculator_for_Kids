
import { useState, useEffect } from "react";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res = 0;
    if (operator === "+") res = num1 + num2;
    if (operator === "-") res = num1 - num2;
    if (operator === "*") res = num1 * num2;

    setResult(res);
    setScore(score + 1);
  };

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, [score]);

  return (
    <div className="game">
      <h2>🎮 Math Adventure 🚀</h2>
      <p>Solve problems and become a math hero!</p>

      <div className="score-badge">
        ⭐ Score: {score} ⭐
      </div>

      <div className="problem">
        <span>{num1}</span>
        <select onChange={(e) => setOperator(e.target.value)} value={operator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
        </select>
        <span>{num2}</span>
      </div>

      <button onClick={calculate}>🎯 Calculate!</button>

      {result !== null && (
        <div className="result">
          Answer: {result}
        </div>
      )}
    </div>
  );
}
