import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
