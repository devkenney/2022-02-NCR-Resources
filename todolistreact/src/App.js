import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/list" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
