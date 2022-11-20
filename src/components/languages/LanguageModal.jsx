import { Modal } from 'react-bootstrap';
import { setLanguageModal } from '../../reduxToolkit/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import TagsData from './TagsData';

const LanguageModal = ({ show }) => {
  const tags = useSelector((state) => state?.languageSlice?.tags?.data);
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
          {tags?.map((tag) => (
            <TagsData tag={tag} />
          ))}
        </ol>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageModal;
