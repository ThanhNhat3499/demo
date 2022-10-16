import './App.css';
import Header from './components/Header/Header';
import Constractor from './pages/constractor/Constractor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EndUser from './pages/endUser/EndUser';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Constractor />} />
          <Route path="/login" element={<EndUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
