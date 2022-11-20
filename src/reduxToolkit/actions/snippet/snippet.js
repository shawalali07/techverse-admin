import toast from 'react-hot-toast';
import { api } from '../../../configurations/axiosInterceptors';
import { authRoutes } from '../../../routes/serverRoutes';
import { setSnippets } from '../../slices/snippet';

export const addSnippet = (formData, setLoading) => async (dispatch) => {
  setLoading(true);

  try {
    const { data } = await api.post(authRoutes.SNIPPET, formData);
    dispatch(getSnippets());
    setLoading(false);
    toast.success('Snippet Added successfully');
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export const getSnippets = () => async (dispatch) => {
  // setLoading(true);
  try {
    const { data } = await api.get(authRoutes.SNIPPET);
    dispatch(setSnippets(data.data));
    // setLoading(false);
  } catch (error) {
    // setLoading(true);
  }
};

export const deleteSnippet = (id, setLoading) => async (dispatch) => {
  setLoading(true);

  try {
    const { data } = await api.delete(authRoutes.SNIPPET + '/' + id);
    dispatch(getSnippets());
    setLoading(false);
    toast.success('Snippet deleted successfully');
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
