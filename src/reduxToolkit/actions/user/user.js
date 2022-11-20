import { browserRoutes } from '../../../routes/browserRoutes';
import { api } from '../../../configurations/axiosInterceptors';
import { setAnswers, setKnowledge, setUsers } from '../../slices/userSlice';
import { authRoutes } from '../../../routes/serverRoutes';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.USERS);
    dispatch(setUsers(data));
  } catch (error) {}
};

export const getKnowledge = () => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.KNOWLEDGE);
    console.log(data);
    dispatch(setKnowledge(data));
  } catch (error) {}
};

export const getAnswers = () => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.ANSWERS);
    dispatch(setAnswers(data));
  } catch (error) {}
};
