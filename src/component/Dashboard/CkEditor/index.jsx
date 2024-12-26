import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = () => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data); 
  };

  return (
    <div style={{ maxWidth: '100%', backgroundColor: '#F6F7FB' }}>
      <CKEditor
        editor={ClassicEditor}
        data={"Your text goes here"}
        onChange={handleEditorChange}
        config={{
          toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        }}
        style={{
          backgroundColor: '#F6F7FB',
          border: 'none',
          borderRadius: '8px',
          padding: '10px',
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
