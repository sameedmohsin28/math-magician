import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
