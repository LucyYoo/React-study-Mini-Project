import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Toolbar({ props }) {
  const [state, setState] = useState({
    data: "",
    editor: null,
  });

  useEffect(() => {
    console.log(state.data);
    const editor = (
      <CKEditor
        id={"ck-editor-text"}
        editor={ClassicEditor}
        data={state.data}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
      />
    );
    setState({ ...state, editor: editor });
  }, []);
  return (
    <div>
      <div>{state.editor}</div>
    </div>
  );
}
