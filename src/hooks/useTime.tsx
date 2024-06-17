import { formatTime } from "@/utils/date";
import { useState, useEffect } from "react";

const useTime = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60_000);

    return () => clearInterval(intervalId);
  }, []);

  return { currentTime, formatedTime: formatTime(currentTime) };
};

export default useTime;
