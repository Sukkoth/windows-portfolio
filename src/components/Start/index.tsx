import useOutsideClick from "@/hooks/useOutsideClick";
import StartItem from "./StartItem";
import { languages, startItems } from "./data";
import ContextItem from "../ContextMenu/ContextItem";
import { useState } from "react";
import { useTab } from "@/Provider/TabProvider";

function Start({
  onClose,
  blackList,
}: {
  onClose: () => void;
  blackList: HTMLDivElement | null;
}) {
  const { handler } = useOutsideClick({
    action: onClose,
    blackList: [blackList],
  });
  const [showPowerOptions, setShowPowerOptions] = useState(false);
  const { toggleAsleep } = useTab();

  function handleShutDown() {
    window.close();
  }

  function handleRestart() {
    location.reload();
  }

  return (
    <div
      ref={handler}
      className='absolute bottom-16 left-[calc(50%-17rem)] rounded-2xl size-[38rem] border border-stone-700 bg-stone-800/70 backdrop-blur-2xl overflow-y-auto scrollbar-hide'
    >
      <div className='p-4'>
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
      <div className='bg-stone-700/40 w-full flex items-center justify-end py-4 px-5 bottom-0 absolute'>
        <div
          className='relative'
          onClick={() => showPowerOptions && setShowPowerOptions(false)}
        >
          <img
            onClick={() => setShowPowerOptions((prev) => !prev)}
            src='https://img.icons8.com/?size=100&id=85077&format=png&color=ffffff'
            className='size-5 cursor-pointer'
            alt=''
          />
          {showPowerOptions && (
            <div className='absolute bottom-7 -right-2 w-40 border border-stone-800 bg-stone-800/90 backdrop-blur-3xl'>
              <ContextItem
                icon='https://img.icons8.com/?size=100&id=bv1XgSVyIgCb&format=png&color=ffffff'
                onClick={() => toggleAsleep(true)}
              >
                Lock Screen
              </ContextItem>
              <ContextItem
                onClick={handleShutDown}
                icon='https://img.icons8.com/?size=100&id=85077&format=png&color=ffffff'
              >
                Shutdown
              </ContextItem>
              <ContextItem
                onClick={handleRestart}
                icon='https://img.icons8.com/?size=100&id=82732&format=png&color=ffffff'
              >
                Restart
              </ContextItem>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Start;
