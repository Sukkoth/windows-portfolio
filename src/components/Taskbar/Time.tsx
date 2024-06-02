import { formatTime, getFormattedDate } from "@/utils/date";
import { useCallback, useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState("");

  const updateTime = useCallback(() => {
    const formattedTime = formatTime();
    setTime(formattedTime);
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <div className='text-xs px-3 mx-3 text-end font-open-sans flex items-center gap-4 font-medium   relative before:content-[" "] before:-left-1 w-full h-full before:-right-1 before:-top-2 before:-bottom-2 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg before:hidden hover:before:block cursor-pointer  before:shadow-inner before:shadow-stone-700'>
      <div>
        <p>{time}</p>
        <p>{getFormattedDate()}</p>
      </div>
    </div>
  );
}

export default Time;
