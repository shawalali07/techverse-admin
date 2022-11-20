import { Visibility } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';
const UsersList = ({ user }) => {
  return (
    <li className='widgetSmListItem'>
      {user?.image ? (
        <img src={user?.image} alt='' className='widgetSmImg' />
      ) : (
        <div className='widgetSmImg noImg'>{user?.name?.slice(0, 2)}</div>
      )}
      <div className='widgetSmUser'>
        <span className='widgetSmUsername'>{user?.name}</span>
        <span className='widgetSmUserTitle'>{user?.designation}</span>
      </div>
      <button className='widgetSmButton'>
        <Visibility className='widgetSmIcon' />
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          state={{ data: user }}
          to={browserRoutes.USERS + '/' + user?._id}
        >
          View Profile
        </Link>
      </button>
    </li>
  );
};

export default UsersList;
