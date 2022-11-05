import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='containerr'>
        {true && <Sidebar />}
        <Routes>
          <Route path='/admin-dashboard' element={<Home />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
