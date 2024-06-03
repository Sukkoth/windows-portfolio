import useOutsideClick from "@/hooks/useOutsideClick";
import StartItem from "./StartItem";
import { languages, startItems } from "./data";

function Start({ close }: { close: () => void }) {
  const { handler } = useOutsideClick(close);

  return (
    <div
      ref={handler}
      className='absolute bottom-16 left-[calc(50%-17rem)] rounded-2xl p-5 size-[35rem] border border-stone-700 bg-stone-800/70 backdrop-blur-2xl overflow-y-auto'
    >
      <p className='pl-1 text-sm'>Skills</p>
      <div className='grid grid-cols-6 mt-2 '>
        {languages.map((item) => (
          <StartItem
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <p className='pl-1 text-sm'>Recently used tools</p>
      <div className='grid grid-cols-6 mt-2'>
        {startItems.map((item) => (
          <StartItem
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Start;
