import ContextItem from "./ContextItem";

type Props = {
  position: { x: number; y: number };
  onIconsChange: () => void;
  onFullScreen: () => void;
};
function ContextMenu({ position, onIconsChange, onFullScreen }: Props) {
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className='absolute w-[16rem] bg-stone-700/70 backdrop-blur-2xl rounded-md p-1 z-[999999] text-sm space-y-0 divide-y divide-stone-500'
    >
      <div>
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
