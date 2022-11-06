import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { browserRoutes } from './routes/browserRoutes';
import AuthRoutes from './authProtectedRoutes/AuthRoutes';
import ProtectedRoutes from './authProtectedRoutes/ProtectedRoutes';
function App() {
  const token = useSelector((state) => state.authSlice?.user?.token);
  return (
    <div className='App'>
      <Header />
      <div className='containerr'>
        {token && <Sidebar />}
        <Routes>
          <Route
            path={browserRoutes.ADMIN_DASHBOARD}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.LOGIN}>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path={browserRoutes.LOGIN}
            element={
              <AuthRoutes redirectLink={browserRoutes.ADMIN_DASHBOARD}>
                <Login />
              </AuthRoutes>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
