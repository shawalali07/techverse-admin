import { Modal } from 'react-bootstrap';
import { setSnippetModal } from '../../reduxToolkit/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Button, TextField } from '@mui/material';
import TextEditor from '../../TextEditor';
import { allTags } from '../../dummyData';
import { useState, useEffect } from 'react';
import { addSnippet } from '../../reduxToolkit/actions/snippet/snippet';

const SnippetModal = ({ show }) => {
  let tags = useSelector((state) => state?.languageSlice?.tags?.data);
  let arrTags = [];
  arrTags = tags?.map((tag) => tag?.tag);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDesc: '',
    tag: tag,
  });
  const dispatch = useDispatch();

  const handleSnippet = () => {
    dispatch(
      addSnippet(
        {
          title: formData.title,
          description: formData.description,
          code: formData.shortDesc,
          tag: formData.tag,
        },
        setLoading
      )
    );
  };

  useEffect(() => {
    setFormData({ ...formData, tag: tag });
  }, [tag]);

  return (
    <Modal
      size='lg'
      onHide={() => dispatch(setSnippetModal(false))}
      scrollable
      centered
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Snippet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className='snippetAddTitle'>
            <lable style={{ marginLeft: '10px' }}>Title</lable>
            <input
              className='shortTitle'
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              type='text'
            />
            <lable style={{ marginLeft: '10px' }}>Short Description</lable>
            <input
              className='shortDesc'
              onChange={(e) =>
                setFormData({ ...formData, shortDesc: e.target.value })
              }
              type='text'
            />
          </div>
          <TextEditor formData={formData} setFormData={setFormData} />
          <Autocomplete
            sx={{ marginTop: 2 }}
            className='snippetTag'
            options={arrTags}
            renderInput={(params) => (
              <TextField {...params} label='Select Tag' />
            )}
            value={tag}
            onChange={(event, newValue) => {
              setTag(newValue);
            }}
          />
          <Button
            disabled={loading}
            onClick={handleSnippet}
            sx={{ marginTop: 2 }}
            variant='contained'
          >
            Submit
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SnippetModal;
