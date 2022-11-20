import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSnippetViewModal } from '../../reduxToolkit/slices/modalSlice';

const SnippetViewModal = ({ snippet }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state?.modalSlice?.snippetViewModal);
  return (
    <Modal
      size='lg'
      onHide={() => dispatch(setSnippetViewModal(false))}
      scrollable
      centered
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title>Snippet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='snippetViewContainer'>
          <div>
            <b>{snippet?.title}</b>
          </div>
          {snippet?.code}
          <div dangerouslySetInnerHTML={{ __html: snippet?.description }}></div>
          <div></div>
          <span className='snippetTag'>javascript</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SnippetViewModal;
