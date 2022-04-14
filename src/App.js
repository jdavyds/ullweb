import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Register2 from './components/register2';
import Dashboard from './dashboard/dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/register-continue' element={<Register2 />}></Route>
      </Routes>
      <Dashboard/>
    </div>
  );
}

export default App;
