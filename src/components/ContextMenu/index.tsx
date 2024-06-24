import ContextItem from "./ContextItem";

type Props = {
  position: { x: number; y: number };
  onIconsChange: () => void;
  onFullScreen: () => void;
  // eslint-disable-next-line no-unused-vars
  toggleDesktopIconSize: (iconSize: "small" | "medium" | "large") => void;
  iconSize: "small" | "medium" | "large";
};
function ContextMenu({
  position,
  onIconsChange,
  onFullScreen,
  iconSize,
  toggleDesktopIconSize,
}: Props) {
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className='absolute w-[16rem] bg-stone-700/60 backdrop-blur-[100px] rounded-md p-1 z-[999999] text-sm space-y-0 divide-y divide-stone-500'
    >
      <div>
        <ContextItem
          groupId='view'
          icon={
            "https://img.icons8.com/?size=120&id=AZOZNnY73haj&format=png&color=000000"
          }
        >
          <div className='flex items-center'>
            View{" "}
            <span className='absolute right-5'>
              <img
                src='https://img.icons8.com/?size=100&id=AgsBKswRnV1i&format=png&color=ffffff'
                className='size-3'
              />{" "}
            </span>
          </div>
          <div className='absolute w-[16rem] bg-stone-700/60 -right-[16.1rem] rounded-md top-0 hidden group-hover/view:block'>
            <ContextItem onClick={() => toggleDesktopIconSize("large")}>
              <div className='flex items-center gap-2'>
                <div
                  className={`size-1 ${
                    iconSize === "large" ? "bg-white border" : "bg-transparent"
                  }  rounded-full`}
                ></div>{" "}
                <p>Large Icons</p>
              </div>
            </ContextItem>
            <ContextItem onClick={() => toggleDesktopIconSize("medium")}>
              <div className='flex items-center gap-2'>
                <div
                  className={`size-1 ${
                    iconSize === "medium" ? "bg-white border" : "bg-transparent"
                  }  rounded-full`}
                ></div>{" "}
                <p>Medium Icons</p>
              </div>
            </ContextItem>
            <ContextItem onClick={() => toggleDesktopIconSize("small")}>
              <div className='flex items-center gap-2'>
                <div
                  className={`size-1 ${
                    iconSize === "small" ? "bg-white border" : "bg-transparent"
                  }  rounded-full`}
                ></div>{" "}
                <p>Small Icons</p>
              </div>
            </ContextItem>
          </div>
        </ContextItem>
        <ContextItem
          onClick={() => window.open("https://github.com/sukkoth", "_blank")}
          icon={
            "https://img.icons8.com/?size=120&id=AZOZNnY73haj&format=png&color=000000"
          }
        >
          Visit Github Profile
        </ContextItem>
        <ContextItem
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/gadisa-teklu-8020a991",
              "_blank"
            )
          }
          icon='https://img.icons8.com/?size=100&id=13930&format=png&color=000000'
        >
          View Linkedin
        </ContextItem>
        <ContextItem
          onClick={() => window.open("https://t.me/sukkoth", "_blank")}
          icon='https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000'
        >
          Contact on Telegram
        </ContextItem>
      </div>
      <div>
        <ContextItem
          onClick={onIconsChange}
          icon='https://img.icons8.com/?size=100&id=1838&format=png&color=ffffff'
        >
          Show Desktop Icons
        </ContextItem>
      </div>
      <div>
        <ContextItem
          onClick={onFullScreen}
          icon='https://img.icons8.com/?size=100&id=CADH0XsA82tP&format=png&color=ffffff'
        >
          Full Screen
        </ContextItem>
      </div>
    </div>
  );
}

export default ContextMenu;
