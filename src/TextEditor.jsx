import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';

const TextEditor = (props) => {
  const { setFormData, formData } = props;
  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    convertToHTML(editorState.getCurrentContent());

    setEditorState(editorState);
    convertContentToHTML();
  };
  const onChange = ({ blocks: [text] }) => {
    const texts = convertToHTML(editorState.getCurrentContent());
    setFormData({ ...formData, description: texts });
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        // wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        onEditorStateChange={onEditorStateChange}
        onChange={onChange}
      />
    </div>
  );
};

export default TextEditor;
