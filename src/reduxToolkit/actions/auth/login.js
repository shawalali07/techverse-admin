import toast from 'react-hot-toast';
import { api, authApi } from '../../../configurations/axiosInterceptors';
import { authRoutes } from '../../../routes/serverRoutes';
import { destroyToken, setToken } from '../../slices/authSlice';
export const loginAdmin =
  (formData, navigate, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const { data } = await authApi.post(authRoutes.LOGIN, formData);
      dispatch(setToken(data));
      navigate('/admin-dashboard');
      toast.success('Login successfully');
      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast.error(error?.response?.data?.message);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    dispatch(destroyToken());
  } catch (error) {}
};
