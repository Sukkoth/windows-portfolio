import { useEffect, useState } from "react";
import { Position } from "@/services/weather/types";
import MiniDisplay from "./MiniDisplay";
import Display from "./Display";
import { useGetWeatherData } from "@/react-query/queries";
import Loader from "@/components/Loader";

function Weather() {
  const [location, setLocation] = useState<Position | null>(null);
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    const fetchLocation = async () => {
      try {
        const position = await getLocation();
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } catch (error) {
        setLocationDenied(true);
        //set to efault location which is addis ababa
        setLocation({
          latitude: 9.0192,
          longitude: 38.7525,
        });
      }
    };

    fetchLocation();
  }, []);

  const { data, isLoading, isError } = useGetWeatherData(location);

  return (
    <>
      <div className='flex flex-col lg:flex-row rounded-2xl w-[98%] mx-auto max-h-full lg:overflow-hidden lg:mt-10'>
        {isLoading || location === null ? (
          <div className='w-full h-[83dvh]'>
            <Loader transparent />
          </div>
        ) : isError ? (
          <div className='w-full h-[83dvh] flex items-center justify-center'>
            <h1 className='px-7 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 rounded-xl'>
              🥴 Could not fetch weather data
            </h1>
          </div>
        ) : data ? (
          <>
            <Display weather={data} useDefaultLocation={locationDenied} />
            <MiniDisplay weather={data} />
          </>
        ) : (
          <h1>Could not get weather data for your location</h1>
        )}
      </div>
    </>
  );
}

export default Weather;
