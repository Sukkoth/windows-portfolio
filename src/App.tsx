import Day from "./components/Day";
import TaskBar from "./components/Taskbar/Taskbar";
import { CSSProperties, useState } from "react";
import ContextMenu from "./components/ContextMenu";
import { useTab } from "./Provider/TabProvider";
import LockScreen from "./components/LockScreen";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const { toggleAsleep, asleep } = useTab();

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

  const asleepBg: CSSProperties = {
    backgroundImage: "url('https://random.imagecdn.app/1920/1080')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main
      style={asleep ? asleepBg : undefined}
      className='text-white h-[100dvh] overflow-hidden'
      onContextMenu={handleRightClick}
      onClick={handleClick}
      onDoubleClick={() => toggleAsleep(false)}
    >
      {!asleep && showMenu && <ContextMenu position={menuPosition} />}
      {!asleep && (
        <>
          <Day />
          <TaskBar />
        </>
      )}
      {asleep && <LockScreen />}
    </main>
  );
}

export default App;
