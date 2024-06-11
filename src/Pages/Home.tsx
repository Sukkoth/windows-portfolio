import ContextMenu from "@/components/ContextMenu";
import Day from "@/components/Day";
import { useEffect, useState } from "react";
import DesktopIcons from "./DesktopIcons";

function Home() {
  const [showDesktopIcons, setShowDesktopIcons] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  //display right click menus
  const handleRightClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setShowMenu(true);
  };

  //show menu toggle to false
  const handleClick = () => {
    setShowMenu(false);
  };

  //toggle show desktop icons
  function handleChangeShowDesktopIcons() {
    setShowDesktopIcons((prev) => !prev);
  }

  //listen for fullscreen
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  //toggle fullscreen
  const handleToggleFullScreen = () => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    }
  };

  return (
    <div
      className='w-full h-full'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >
      {showMenu && (
        <ContextMenu
          position={menuPosition}
          onIconsChange={handleChangeShowDesktopIcons}
          onFullScreen={handleToggleFullScreen}
        />
      )}
      <Day />
      {showDesktopIcons && <DesktopIcons />}
    </div>
  );
}

export default Home;
