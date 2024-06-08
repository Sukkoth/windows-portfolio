import ContextMenu from "@/components/ContextMenu";
import Day from "@/components/Day";
import { useState } from "react";

function Home() {
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
    <div
      className='w-full h-full'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >
      {showMenu && <ContextMenu position={menuPosition} />}
      <Day />
    </div>
  );
}

export default Home;
