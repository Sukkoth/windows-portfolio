import { useCallback, useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState("");

  function getFormattedDate() {
    const date = new Date();
    const month = date.getMonth() + 1; // Months are zero-based, so we need to add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  function formatTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

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
