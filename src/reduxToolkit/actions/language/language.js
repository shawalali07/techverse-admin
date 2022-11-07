import { api } from '../../../configurations/axiosInterceptors';
import { authRoutes } from '../../../routes/serverRoutes';
export const addLanguage = (language) => async (dispatch) => {
  try {
    const { data } = await api.post(authRoutes.LANGUAGE, language);
  } catch (error) {}
};
