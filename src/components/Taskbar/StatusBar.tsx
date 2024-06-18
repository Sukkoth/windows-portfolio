import { useRef, useState } from "react";
import Battery from "./Battery";
import Network from "./Network";
import Time from "./Time";
import HiddenIcons from "./HiddenIcons";
import useOutsideClick from "@/hooks/useOutsideClick";

function StatusBar() {
  const [showHiddenIcons, setShowHiddenIcons] = useState(true);
  const blackListRef = useRef<HTMLDivElement | null>(null);
  const { handler } = useOutsideClick({
    action: () => setShowHiddenIcons(false),
    blackList: [blackListRef?.current],
  });

  return (
    <div className='items-center gap-2 hidden relative lg:flex z-[999999]'>
      <div className='relative' ref={blackListRef}>
        <HiddenIcons show={showHiddenIcons} />
      </div>
      <div
        ref={handler}
        onClick={() => setShowHiddenIcons((prev) => !prev)}
        className={`relative before:content-[''] before:-left-1 before:-right-1 before:-top-2 before:-bottom-2 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg p-2 cursor-pointer before:shadow-inner before:shadow-stone-700 me-3 w-14 ${
          showHiddenIcons ? "before:block" : "before:hidden hover:before:block"
        }`}
      >
        <img
          src='https://img.icons8.com/?size=100&id=ZOUx9tGqWHny&format=png&color=ffffff'
          className={`h-full w-full duration-300 ${
            showHiddenIcons ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className='flex items-center gap-2 relative before:content-[" "] before:-left-4 w-full h-full before:-right-4 before:-top-3 before:-bottom-3 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg before:hidden hover:before:block cursor-pointer  before:shadow-inner before:shadow-stone-700'>
        <Network />
        <Battery />
      </div>
      <Time />
    </div>
  );
}

export default StatusBar;
