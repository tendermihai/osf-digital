import React, { useState, useEffect } from "react";
import "../App.css";

const Calculator = () => {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  useEffect(() => {
    try {
      setResult(eval(`${operand1} ${operation} ${operand2}`));
    } catch (error) {
      setResult("Error");
    }
  }, [operand1, operand2, operation]);

  const handleClear = () => {
    setOperand1(0);
    setOperand2(0);
    setOperation("+");
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-container">
        <div className="inputs">
          <label>
            Operand 1:
            <input
              type="number"
              value={operand1}
              onChange={(e) => setOperand1(Number(e.target.value))}
            />
          </label>
          <label>
            Operand 2:
            <input
              type="number"
              value={operand2}
              onChange={(e) => setOperand2(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="operations">
          <label>
            Operation:
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
        </div>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
