import ContextMenu from "@/components/ContextMenu";
import Day from "@/components/Day";
import { useEffect, useState } from "react";
import DesktopIcons from "@/components/Home/DesktopIcons";

type IconSize = "small" | "medium" | "large";

function Home() {
  const [showDesktopIcons, setShowDesktopIcons] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [desktopIconSize, setDesktopIconSize] = useState<IconSize>("small");

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

  function toggleDesktopIconSize(iconSize: IconSize) {
    setDesktopIconSize(iconSize);
    localStorage.setItem("desktopIconSize", JSON.stringify(iconSize));
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

  useEffect(() => {
    const localData = localStorage.getItem("desktopIconSize");
    const localSizePreference: string = localData
      ? JSON.parse(localData)
      : "small";
    switch (localSizePreference) {
      case "small":
        setDesktopIconSize("small");
        break;
      case "medium":
        setDesktopIconSize("medium");
        break;
      case "large":
        setDesktopIconSize("large");
        break;
      default:
        setDesktopIconSize("small");
    }
  }, []);

  const contextMenuProps = {
    iconSize: desktopIconSize,
    toggleDesktopIconSize: toggleDesktopIconSize,
    position: menuPosition,
    onIconsChange: handleChangeShowDesktopIcons,
    onFullScreen: handleToggleFullScreen,
  };

  return (
    <div
      className='w-full h-full'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >
      {showMenu && <ContextMenu {...contextMenuProps} />}
      <Day />
      {showDesktopIcons && <DesktopIcons iconSize={desktopIconSize} />}
    </div>
  );
}

export default Home;
