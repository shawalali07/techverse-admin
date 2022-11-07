import './sidebar.css';
import { LineStyle, CodeOutlined } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { DataObjectOutlined, Logout } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { destroyToken } from '../../reduxToolkit/slices/authSlice';
import { browserRoutes } from '../../routes/browserRoutes';

export default function Sidebar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(destroyToken());
  };

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <NavLink to={browserRoutes.ADMIN_DASHBOARD} className='link'>
              <li className='sidebarListItem'>
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </NavLink>
            <NavLink to={browserRoutes.LANGUAGES} className='link'>
              <li className='sidebarListItem'>
                <DataObjectOutlined className='sidebarIcon' />
                Add Languages
              </li>
            </NavLink>
            <NavLink to={browserRoutes.SKILLS} className='link'>
              <li className='sidebarListItem'>
                <CodeOutlined className='sidebarIcon' />
                Add Skills
              </li>
            </NavLink>
            <li onClick={logout} className='sidebarListItem'>
              <Logout className='sidebarIcon' />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
