import { browserRoutes } from '../../../routes/browserRoutes';
import { api } from '../../../configurations/axiosInterceptors';
import { setUsers } from '../../slices/userSlice';
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.get(browserRoutes.USERS);
    dispatch(setUsers(data));
  } catch (error) {}
};
