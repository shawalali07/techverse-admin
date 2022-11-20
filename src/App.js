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
import Languages from './components/languages/Languages';
import Skills from './components/skills/Skills';
import Snippets from './components/snippets/Snippets';
import { Toaster } from 'react-hot-toast';
import User from './components/user/User';
function App() {
  const token = useSelector((state) => state.authSlice?.user?.token);
  return (
    <div className='App'>
      <Toaster position='bottom-center' />

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
            path={browserRoutes.LANGUAGES}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.LOGIN}>
                <Languages />
              </ProtectedRoutes>
            }
          />
          <Route
            path={browserRoutes.SNIPPET}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.LOGIN}>
                <Snippets />
              </ProtectedRoutes>
            }
          />
          <Route
            path={browserRoutes.SKILLS}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.LOGIN}>
                <Skills />
              </ProtectedRoutes>
            }
          />
          <Route
            path={browserRoutes.USERS + '/:id'}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.LOGIN}>
                <User />
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
