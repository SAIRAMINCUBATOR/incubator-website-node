"use client";
import React, { useEffect, useRef, useState } from "react";
const Editor = (
  {
    value,
    onChange,
    disabled,
  }: { value: string; onChange: (data: string) => void , disabled: boolean}
  
) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  //@ts-ignore
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    //@ts-ignore
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <CKEditor
      disabled={disabled}
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  ) : (
    <div>Editor loading</div>
  );
};

export default Editor;
