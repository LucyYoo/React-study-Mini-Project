import React from "react";

export default function Toolbar({ value }) {
  function onChange(e) {
    const commend = e.target.dataset.commend;
    // if (commend !== undefined) {
    //   document.execCommand(commend);
    // }
  }
  return (
    <div onClick={onChange}>
      <button type="button" data-commend="bold">
        Bold
      </button>
      <button type="button" data-commend="italic">
        Italic
      </button>
      <button type="button" data-commend="underLine">
        UnderLine
      </button>
      <button type="button" data-commend="strikeThrough">
        Strike Through
      </button>
      <button type="button" data-commend="justifyLeft">
        Align Left
      </button>
      <button type="button" data-commend="justifyCenter">
        Align Center
      </button>
      <button type="button" data-commend="justifyRight">
        Align Right
      </button>
    </div>
  );
}
