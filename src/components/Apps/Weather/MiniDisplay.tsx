import { formatTime, getGreeting } from "@/utils/date";
import DayCard from "./DayCard";
import { Weather } from "@/services/weather/types";

type Props = {
  weather: Weather;
};

function MiniDisplay({ weather }: Props) {
  return (
    <div className='lg:w-1/4 bg-stone-700/60 p-5 text-center sm-only:pb-20'>
      <h1 className='text-4xl mb-5'>{getGreeting()}</h1>
      <h3 className='text-3xl'>{formatTime()}</h3>
      {/* //! */}

      <div className='flex justify-center items-center mt-5 mb-0'>
        <img
          className='size-16'
          src={
            weather.forecast.forecastday[0].hour[new Date().getHours()]
              .condition.icon
          }
          alt='icon'
        />
      </div>
      <div className='flex items-center justify-center flex-wrap'>
        <h1 className='font-medium relative after:content-["o"] after:-top-1 after:absolute after:size-9 after:text-white min-w-fit px-4 after:text-[2rem]'>
          <span className='text-[3rem]'>
            {weather.forecast.forecastday[0].hour[new Date().getHours()].temp_c}
          </span>
        </h1>
        <div className='ml-10 mt-2 space-y-6'>
          <div className='flex gap-4 items-center'>
            <img
              className='size-6'
              src='https://img.icons8.com/?size=100&id=RtDA8YDN9Mi9&format=png&color=ffffff'
              alt='wind'
            />
            <h1>
              {
                weather.forecast.forecastday[0].hour[new Date().getHours()]
                  .wind_mph
              }{" "}
              mph
            </h1>
          </div>
          <div className='flex gap-4 items-center'>
            <img
              className='size-6'
              src='https://img.icons8.com/?size=100&id=I7Uv9dQ4WLYh&format=png&color=000000'
              alt='humidity'
            />
            <h1>
              {
                weather.forecast.forecastday[0].hour[new Date().getHours()]
                  .humidity
              }
              %
            </h1>
          </div>
        </div>
      </div>
      <h1 className='tracking-wide text-xl font-mono mt-6 font-medium flex-grow'>
        {
          weather.forecast.forecastday[0].hour[new Date().getHours()].condition
            .text
        }
      </h1>
      {/* //! */}
      <h1 className='text-2xl mt-10 mb-5'>Hourly Forecast</h1>
      <div className='flex flex-wrap gap-5 justify-center'>
        {weather.forecast.forecastday[0].hour
          .slice(new Date().getHours(), new Date().getHours() + 6)
          .map((hourData, index) => (
            <DayCard
              key={index}
              top={hourData.time.split(" ")[1]}
              icon={hourData.condition.icon}
              middle={hourData.temp_c.toString()}
              bottom={hourData.condition.text}
            />
          ))}
      </div>
    </div>
  );
}

export default MiniDisplay;
