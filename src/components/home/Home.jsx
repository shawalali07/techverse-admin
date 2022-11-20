import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../reduxToolkit/actions/user/user';
import { useEffect } from 'react';

export default function Home() {
  const users = useSelector((state) => state?.userSlice?.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className='home'>
      <FeaturedInfo users={users} />
      <Chart data={userData} title='User Analytics' grid dataKey='Users' />
      <div className='homeWidgets'>
        <WidgetSm users={users} />
      </div>
    </div>
  );
}
