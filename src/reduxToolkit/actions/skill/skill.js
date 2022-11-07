import { api } from '../../../configurations/axiosInterceptors';
import { authRoutes } from '../../../routes/serverRoutes';
export const addSkill = (skill) => async (dispatch) => {
  try {
    const { data } = await api.post(authRoutes.SKILL, skill);
  } catch (error) {}
};
