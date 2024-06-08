import { useEffect, useState } from "react";
import { Position } from "@/services/weather/types";
import MiniDisplay from "./MiniDisplay";
import Display from "./Display";
import { useGetWeatherData } from "@/react-query/queries";

function Content() {
  //default to addis ababa
  const [location, setLocation] = useState<Position | null>({
    latitude: 9.0192,
    longitude: 38.7525,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const { data, isLoading, error, isError } = useGetWeatherData(location);

  return (
    <>
      <div className='flex flex-col lg:flex-row rounded-2xl w-[98%] mx-auto max-h-full lg:overflow-hidden lg:mt-10'>
        {isLoading ? (
          <h1 className='animate-pulse text-stone-400'>Loading . . .</h1>
        ) : isError ? (
          <h1>{error.message}</h1>
        ) : data ? (
          <>
            <Display weather={data} />
            <MiniDisplay weather={data} />
          </>
        ) : (
          <h1>Could not get weather data for your location</h1>
        )}
      </div>
    </>
  );
}

export default Content;
