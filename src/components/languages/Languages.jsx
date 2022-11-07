import './languages.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setLanguageModal } from '../../reduxToolkit/slices/modalSlice';
import { useState } from 'react';
import { addLanguage } from '../../reduxToolkit/actions/language/language';

const Languages = () => {
  const [language, setLanguage] = useState('');
  const dispatch = useDispatch();

  const handleLanguage = (action) => {
    if (action === 'add') {
      dispatch(addLanguage(language));
    } else {
    }
  };

  return (
    <div className='languages'>
      <div className='languageWrapper'>
        <h1>Add Language</h1>
        <input onChange={(e) => setLanguage(e.target.value)} type='text' />
        <div className='buttonWrapper'>
          <Button
            onClick={() => handleLanguage('add')}
            disabled={!language}
            sx={{ marginTop: 2 }}
            variant='contained'
          >
            Add
          </Button>
          <Button
            onClick={() => handleLanguage('remove')}
            disabled={!language}
            sx={{ marginTop: 2 }}
            variant='contained'
            color='error'
          >
            Remove
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
