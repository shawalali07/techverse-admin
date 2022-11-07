import { Modal } from 'react-bootstrap';
import { setLanguageModal } from '../../reduxToolkit/slices/modalSlice';
import { useDispatch } from 'react-redux';

const LanguageModal = ({ show }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      onHide={() => dispatch(setLanguageModal(false))}
      scrollable
      centered
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title>All Languages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol className='languageOl'>
          <li className='languageList'>Javascript</li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageModal;
