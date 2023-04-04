import './calculator.css';

function Calculator() {
  return (
    <div className="calculator-div">
      <div className="display-result">0</div>

      <div className="row first-row">
        <button type="button" className="btn ac">A/C</button>
        <button type="button" className="btn plus-minus">+/-</button>
        <button type="button" className="btn percentage">%</button>
        <button type="button" className="btn divide">/</button>
      </div>

      <div className="row second-row">
        <button type="button" className="btn seven">7</button>
        <button type="button" className="btn eight">8</button>
        <button type="button" className="btn nine">9</button>
        <button type="button" className="btn multiply">*</button>
      </div>

      <div className="row third-row">
        <button type="button" className="btn four">4</button>
        <button type="button" className="btn five">5</button>
        <button type="button" className="btn six">6</button>
        <button type="button" className="btn minus">-</button>
      </div>

      <div className="row fourth-row">
        <button type="button" className="btn one">1</button>
        <button type="button" className="btn two">2</button>
        <button type="button" className="btn three">3</button>
        <button type="button" className="btn plus">+</button>
      </div>

      <div className="row fifth-row">
        <button type="button" className="btn zero">0</button>
        <button type="button" className="btn dot">.</button>
        <button type="button" className="btn equal-sign">=</button>
      </div>
    </div>
  );
}

export default Calculator;

// { /* <div className=""></div> */ }
