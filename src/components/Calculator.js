import { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [result, setResult] = useState({});
  const handleClick = (e) => {
    setResult(calculate(result, e.target.innerHTML));
  };

  return (
    <>
      <div className="parent-div">
        <div className="intro-line">
          <p>Lets do some math</p>
        </div>
        <div className="calculator-div">
          <div className="display-result">{result.next === null ? result.total : result.next}</div>

          <div className="row first-row">
            <button type="button" className="btn ac" onClick={handleClick}>A/C</button>
            <button type="button" className="btn plus-minus" onClick={handleClick}>+/-</button>
            <button type="button" className="btn percentage" onClick={handleClick}>%</button>
            <button type="button" className="btn divide" onClick={handleClick}>÷</button>
          </div>

          <div className="row second-row">
            <button type="button" className="btn seven" onClick={handleClick}>7</button>
            <button type="button" className="btn eight" onClick={handleClick}>8</button>
            <button type="button" className="btn nine" onClick={handleClick}>9</button>
            <button type="button" className="btn multiply" onClick={handleClick}>x</button>
          </div>

          <div className="row third-row">
            <button type="button" className="btn four" onClick={handleClick}>4</button>
            <button type="button" className="btn five" onClick={handleClick}>5</button>
            <button type="button" className="btn six" onClick={handleClick}>6</button>
            <button type="button" className="btn minus" onClick={handleClick}>-</button>
          </div>

          <div className="row fourth-row">
            <button type="button" className="btn one" onClick={handleClick}>1</button>
            <button type="button" className="btn two" onClick={handleClick}>2</button>
            <button type="button" className="btn three" onClick={handleClick}>3</button>
            <button type="button" className="btn plus" onClick={handleClick}>+</button>
          </div>

          <div className="row fifth-row">
            <button type="button" className="btn zero" onClick={handleClick}>0</button>
            <button type="button" className="btn dot" onClick={handleClick}>.</button>
            <button type="button" className="btn equal-sign" onClick={handleClick}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
