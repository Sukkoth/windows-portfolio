import useOutsideClick from "@/hooks/useOutsideClick";
import StartItem from "./StartItem";
import { languages, startItems } from "./data";
import ContextItem from "../ContextMenu/ContextItem";
import { useState } from "react";
import { useTab } from "@/Provider/TabProvider";
import { useNavigate } from "react-router-dom";

function Start({
  onClose,
  blackList,
}: {
  onClose: () => void;
  blackList: HTMLDivElement | null;
}) {
  const navigate = useNavigate();

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
      className='absolute bottom-16 lg:left-[calc(50%-17rem)] rounded-lg  border-2 border-stone-700 bg-stone-800/70 backdrop-blur-2xl overflow-hidden  sm-only:mx-1 sm-only:inset-x-0 sm:size-[35rem] md:size[40rem]'
    >
      <div className='p-2 sm-only:pb-16 sm-only:h-[70dvh] max-h-[40rem] overflow-y-scroll scrollbar-hide'>
        <p className='pl-1 text-sm'>Skills</p>
        <div className='grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 mt-2 '>
          {languages.map((item) => (
            <StartItem
              key={item.title}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        <p className='pl-1 text-sm'>Recently used tools</p>
        <div className='grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 mt-2 '>
          {startItems.map((item) => (
            <StartItem
              key={item.title}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className='bg-stone-700 w-full flex items-center absolute bottom-0 justify-between py-3 px-5'>
        <div
          onClick={() => {
            navigate("/explorer/about");
            onClose();
          }}
          className='relative flex items-center gap-2 text-sm cursor-pointer before:content-[""] before:-inset-2 before:absolute before:bg-stone-800/60 before:hidden before:hover:block before:-z-50 z-10 before:rounded-lg'
        >
          <div className='size-8 rounded-full border overflow-hidden'>
            <img src='/assets/avatarresi.png' alt='' />
          </div>
          <p>Gadisa Teklu</p>
        </div>
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
