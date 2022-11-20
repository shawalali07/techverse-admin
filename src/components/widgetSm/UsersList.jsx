import { Visibility } from '@material-ui/icons';

const UsersList = ({ user }) => {
  console.log(user);
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
        View Profile
      </button>
    </li>
  );
};

export default UsersList;
