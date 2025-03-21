import React from "react";

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      className="editor"
    />
  );
};

export default Editor;
