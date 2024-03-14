import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
const   Editor = ({
  value,
  onChange,
}: {value: string, onChange: (data:string)=>void}) => {
  return (
    <div className="table-auto border-red-500">
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      
    />
    </div>
  );
};

export default Editor;