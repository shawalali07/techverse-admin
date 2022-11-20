import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteLanguage } from '../../reduxToolkit/actions/language/language';
import { useState } from 'react';
const TagsData = ({ tag }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteLanguage(id, setLoading));
  };
  return (
    <div className='tagsData d-flex justify-content-between align-items-center'>
      <li className=''>{tag.tag}</li>
      <Button
        disabled={loading}
        onClick={() => handleDelete(tag?._id)}
        sx={{ marginTop: 2 }}
        variant='contained'
        color='error'
      >
        Remove
      </Button>
    </div>
  );
};

export default TagsData;
