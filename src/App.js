import Login from './components/Login';
import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

    </div>
  );
}

export default App;
