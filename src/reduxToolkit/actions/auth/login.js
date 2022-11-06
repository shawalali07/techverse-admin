import { api, authApi } from '../../../configurations/axiosInterceptors';
import { authRoutes } from '../../../routes/serverRoutes';
import { destroyToken, setToken } from '../../slices/authSlice';
export const loginAdmin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await authApi.post(authRoutes.LOGIN, formData);
    dispatch(setToken(data));
    navigate('/admin-dashboard');
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(destroyToken());
  } catch (error) {}
};
