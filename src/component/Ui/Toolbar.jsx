import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Toolbar({ props }) {
  const [text, setText] = useState({
    data: "",
    editor: null,
  });

  useEffect(() => {
    const editor = (
      <CKEditor
        id={"ck-editor-text"}
        editor={ClassicEditor}
        data={text.data}
        onChange={(event, editor) => {
          const data = editor.getData();
        }}
      />
    );
    setText({ ...text, editor: editor });
  }, []);
  return (
    <div>
      <div>{text.editor}</div>
    </div>
  );
}
