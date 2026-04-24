import { useState } from "react";
import ReactQuill from "react-quill-new";
import "./Editor.scss";
function Editor() {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [["bold", "italic", "underline"], ["link"]],
  };

  const formats = ["bold", "italic", "underline", "link"];
  return (
    <ReactQuill
      theme="snow"
      placeholder={"hãy viết comment của bạn đi"}
      modules={modules}
      formats={formats}
      value={value}
      onChange={setValue}
      className="md:mt-4"
    />
  );
}

export default Editor;
