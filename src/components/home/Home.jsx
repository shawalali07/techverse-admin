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
} from '../../reduxToolkit/actions/user/user';
import { useEffect } from 'react';

export default function Home() {
  const users = useSelector((state) => state?.userSlice?.users);
  const knowledge = useSelector((state) => state?.userSlice?.knowledge);
  const answers = useSelector((state) => state?.userSlice?.answers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getKnowledge());
    dispatch(getAnswers());
  }, []);

  return (
    <div className='home'>
      <FeaturedInfo answers={answers} knowledge={knowledge} users={users} />
      <Chart data={userData} title='User Analytics' grid dataKey='Users' />
      <div className='homeWidgets'>
        <WidgetSm users={users} />
      </div>
    </div>
  );
}
