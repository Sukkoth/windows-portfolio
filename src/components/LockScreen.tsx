import { Position } from "@/services/weather/types";
import { formatTime, getDayName } from "@/utils/date";
import DayCard from "@/components/Apps/Weather/DayCard";
import { useEffect, useState } from "react";
import { useGetWeatherData } from "@/react-query/queries";
import { useTab } from "@/Provider/TabProvider";

function LockScreen() {
  const { toggleAsleep } = useTab();
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const [location, setLocation] = useState<Position | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const { data: weather } = useGetWeatherData(location);

  return (
    <div
      onDoubleClick={() => toggleAsleep(false)}
      className={`backdrop-blur-xl h-[100dvh] w-full flex items-center flex-col select-none text-white `}
    >
      <h1 className='text-[10rem] font-medium tracking-wide mt-[5rem]'>
        {formatTime()}
      </h1>
      <p className='text-[2rem]'>{formattedDate}</p>
      <img
        className='my-5'
        src='https://img.icons8.com/?size=100&id=1F5Aok9b4nxz&format=png&color=000000'
        alt=''
      />
      <p className='font-mono'>🤩 Double Click to unlock</p>
      {weather && (
        <div className='absolute bottom-20'>
          <div className='flex gap-5 mt-14 items-center justify-center'>
            {weather.forecast.forecastday.map((day, index) => (
              <DayCard
                top={getDayName(new Date(day.date).getDay(), true)}
                middle={day.day.avgtemp_c.toString()}
                bottom={day.day.condition.text}
                key={index}
                icon={day.day.condition.icon}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LockScreen;
