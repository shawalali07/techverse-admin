import './languages.css';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageModal } from '../../reduxToolkit/slices/modalSlice';
import { useState, useEffect } from 'react';
import {
  addLanguage,
  getLanguages,
} from '../../reduxToolkit/actions/language/language';

const Languages = () => {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className='languages'>
      <div className='languageWrapper'>
        <h1>Add Language</h1>
        <input onChange={(e) => setLanguage(e.target.value)} type='text' />
        <div className='buttonWrapper'>
          <Button
            onClick={() => dispatch(addLanguage(language, setLoading))}
            disabled={!language || loading}
            sx={{ marginTop: 2 }}
            variant='contained'
          >
            Add
          </Button>

          <Button
            onClick={() => dispatch(setLanguageModal(true))}
            variant='outlined'
            sx={{ marginTop: 2 }}
          >
            See All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Languages;
