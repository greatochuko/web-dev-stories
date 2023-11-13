import EditorJS, { OutputData } from "@editorjs/editorjs";
import { useState, useEffect } from "react";
import { createPost } from "../services/postServices";

export default function CreatePostPage() {
  const [editor, setEditor] = useState<EditorJS | null>(null);

  useEffect(() => {
    setEditor(new EditorJS("editor"));
  }, []);

  async function publishBlog() {
    const content = await editor?.save();
    console.log(content);

    const data = await createPost("title", content as OutputData, "react");
    console.log(data);
  }

  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      <div id="editor" className="border border-zinc-400"></div>
      <button onClick={publishBlog}>Save</button>
    </div>
  );
}
