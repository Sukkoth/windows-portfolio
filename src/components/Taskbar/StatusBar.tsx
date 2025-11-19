import { useRef } from "react";
import Battery from "./Battery";
import Network from "./Network";
import Time from "./Time";
import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  toggleQuickSettings: () => void;
  toggleNotificationPanel: () => void;
  // eslint-disable-next-line no-unused-vars
  toggleHiddenIcons: (status?: boolean) => void;
  showingHiddenIcons: boolean;
};

function StatusBar({
  toggleQuickSettings,
  toggleNotificationPanel,
  toggleHiddenIcons,
  showingHiddenIcons,
}: Props) {
  const blackListRef = useRef<HTMLDivElement | null>(null);
  const { handler } = useOutsideClick({
    action: () => toggleHiddenIcons(false),
    blackList: [blackListRef?.current],
  });

  return (
    <>
      <div
        title='Show Hidden Icons'
        ref={handler}
        onClick={() => toggleHiddenIcons()}
        className={`relative before:content-[''] before:-left-1 before:-right-1 before:-top-2 before:-bottom-2 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg p-2 cursor-pointer before:shadow-inner before:shadow-stone-700 me-3 w-14 ${
          showingHiddenIcons
            ? "before:block"
            : "before:hidden hover:before:block"
        }`}
      >
        <img
          src='https://img.icons8.com/?size=100&id=ZOUx9tGqWHny&format=png&color=ffffff'
          className={`h-full w-full duration-300 ${
            showingHiddenIcons ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        title='Show Quick Settings'
        onClick={toggleQuickSettings}
        className='flex items-center gap-2 relative before:content-[" "] before:-left-4 w-full h-full before:-right-4 before:-top-3 before:-bottom-3 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg before:hidden hover:before:block cursor-pointer  before:shadow-inner before:shadow-stone-700'
      >
        <Network />
        <Battery />
      </div>
      <Time toggleNotificationPanel={toggleNotificationPanel} />
    </>
  );
}

export default StatusBar;
