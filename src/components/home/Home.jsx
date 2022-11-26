import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnswers,
  getKnowledge,
  getUsers,
  getUsersChart,
} from '../../reduxToolkit/actions/user/user';
import { useEffect } from 'react';
import moment from 'moment';
export default function Home() {
  const users = useSelector((state) => state?.userSlice?.users);
  let usersChart = useSelector((state) => state?.userSlice?.usersChart?.data);
  const knowledge = useSelector((state) => state?.userSlice?.knowledge);
  const answers = useSelector((state) => state?.userSlice?.answers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getKnowledge());
    dispatch(getAnswers());
    dispatch(getUsersChart());
  }, []);

  console.log(usersChart);

  return (
    <div className='home'>
      <FeaturedInfo answers={usersChart} knowledge={knowledge} users={users} />
      <Chart data={usersChart} title='User Analytics' grid dataKey='Count' />
      <div className='homeWidgets'>
        <WidgetSm users={users} />
      </div>
    </div>
  );
}
