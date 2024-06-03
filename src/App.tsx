import Day from "./components/Day";
import TaskBar from "./components/Taskbar/Taskbar";
import "./App.css";
import { useState } from "react";
import ContextMenu from "./components/ContextMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleRightClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setShowMenu(true);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <main
      className='text-white h-[100dvh] overflow-hidden'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >
      {showMenu && <ContextMenu position={menuPosition} />}
      <Day />
      <TaskBar />
    </main>
  );
}

export default App;
