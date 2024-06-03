import ContextItem from "./ContextItem";

function ContextMenu({ position }: { position: { x: number; y: number } }) {
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className='absolute w-[16rem] bg-stone-700/70 backdrop-blur-2xl rounded-md  p-2 z-50 text-sm space-y-0 divide-y divide-stone-500'
    >
      <div>
        <ContextItem
          icon={
            "https://img.icons8.com/?size=120&id=AZOZNnY73haj&format=png&color=000000"
          }
        >
          Visit Github Profile
        </ContextItem>
        <ContextItem icon='https://img.icons8.com/?size=100&id=13930&format=png&color=000000'>
          View Linkedin
        </ContextItem>
        <ContextItem icon='https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000'>
          Contact on Telegram
        </ContextItem>
      </div>
    </div>
  );
}

export default ContextMenu;
