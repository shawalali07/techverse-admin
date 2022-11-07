import { Modal } from 'react-bootstrap';
import { setSkillModal } from '../../reduxToolkit/slices/modalSlice';
import { useDispatch } from 'react-redux';

const SkillModal = ({ show }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      onHide={() => dispatch(setSkillModal(false))}
      scrollable
      centered
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title>All Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol className='skillOl'>
          <li className='skillList'>Frontend</li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};

export default SkillModal;
