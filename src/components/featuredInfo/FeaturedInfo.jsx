import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo({ users, knowledge, answers }) {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Users</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>{users?.length}</span>
        </div>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Solutions</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>{answers?.length}</span>
        </div>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Knowledge Posted</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>{knowledge?.length}</span>
        </div>
      </div>
    </div>
  );
}
