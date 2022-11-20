import toast from 'react-hot-toast';
import { api } from '../../../configurations/axiosInterceptors';
import { authRoutes } from '../../../routes/serverRoutes';
import { setTags } from '../../slices/languageSlice';

export const addLanguage = (language, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.post(authRoutes.LANGUAGE, { tag: language });
    toast.success('Tag Successfully added');
    setLoading(false);

    dispatch(getLanguages());
  } catch (error) {
    setLoading(false);

    console.log(error.response);
  }
};

export const deleteLanguage = (id, setLoading) => async (dispatch) => {
  setLoading(true);

  try {
    const { data } = await api.delete(authRoutes.LANGUAGE + '/' + id);
    toast.success('Tag Successfully deleted');
    setLoading(false);

    dispatch(getLanguages());
  } catch (error) {
    setLoading(false);

    console.log(error.response);
  }
};

export const getLanguages = () => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.LANGUAGE);
    dispatch(setTags(data));
  } catch (error) {}
};
