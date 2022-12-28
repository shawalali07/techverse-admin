import './widgetSm.css';
import UsersList from './UsersList';

export default function WidgetSm({ users }) {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {users?.slice(0, 5)?.map((user) => (
          <UsersList user={user} />
        ))}
      </ul>
    </div>
  );
}
