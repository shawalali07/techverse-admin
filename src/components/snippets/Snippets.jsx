import './snippets.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getSnippets } from '../../reduxToolkit/actions/snippet/snippet';
import { setSnippetModal } from '../../reduxToolkit/slices/modalSlice';
import SnippetTable from './SnippetTable';
import { useEffect, useState } from 'react';
import { getLanguages } from '../../reduxToolkit/actions/language/language';

const Snippets = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSnippets());
    dispatch(getLanguages());
  }, []);

  return (
    <div className='snippets'>
      <Button
        style={{
          backgroundColor: '#1976d2',
          padding: '10px',
          borderRadius: '5px',
        }}
        onClick={() => dispatch(setSnippetModal(true))}
        variant='contained'
      >
        Add Snippet
      </Button>
      <SnippetTable loading={loading} />
    </div>
  );
};

export default Snippets;
