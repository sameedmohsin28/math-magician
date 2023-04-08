import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <div className="return-calculator">
        <Calculator />
      </div>
      <div>
        <Quotes />
      </div>
    </>
  );
}

export default App;
