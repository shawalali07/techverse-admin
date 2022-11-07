import './skills.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSkillModal } from '../../reduxToolkit/slices/modalSlice';
import { useState } from 'react';
import { addSkill } from '../../reduxToolkit/actions/skill/skill';

const Skills = () => {
  const [skill, setSkill] = useState('');
  const dispatch = useDispatch();

  const handleSkill = (action) => {
    if (action === 'add') {
      dispatch(addSkill(skill));
    } else {
    }
  };

  return (
    <div className='skills'>
      <div className='skillWrapper'>
        <h1>Add Skill</h1>
        <input onChange={(e) => setSkill(e.target.value)} type='text' />
        <div className='buttonWrapper'>
          <Button
            onClick={() => handleSkill('add')}
            disabled={!skill}
            sx={{ marginTop: 2 }}
            variant='contained'
          >
            Add
          </Button>
          <Button
            onClick={() => handleSkill('remove')}
            disabled={!skill}
            sx={{ marginTop: 2 }}
            variant='contained'
            color='error'
          >
            Remove
          </Button>
          <Button
            onClick={() => dispatch(setSkillModal(true))}
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

export default Skills;
