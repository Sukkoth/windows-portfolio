import { notes } from "@/data/notes";
import { useLocation } from "react-router-dom";

function Notepad() {
  const location = useLocation();

  const noteId = location.state?.noteId;

  const content = notes.find((note) => noteId === note.id)?.content;

  return (
    <div className='p-2 pb-20 overflow-y-auto h-full bg-stone-800/95'>
      <div
        contentEditable
        className='outline-none'
        dangerouslySetInnerHTML={content ? { __html: content } : undefined}
      ></div>
    </div>
  );
}

export default Notepad;
