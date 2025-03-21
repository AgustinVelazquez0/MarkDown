import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: DOMPurify.sanitize(rawMarkup) };
  };

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={getMarkdownText()}
      className="preview"
    />
  );
};

export default Preview;
