import { getDayName, getFormattedDate } from "@/utils/date";
import DayCard from "./DayCard";
import { Weather } from "@/services/weather/types";

type Props = {
  weather: Weather;
};

function Display({ weather }: Props) {
  return (
    <div className='lg:w-3/4 bg-stone-800/60 p-5 text-center'>
      <div className='flex flex-col lg:flex-row justify-between items-center px-10'>
        <h1 className='text-2xl'>
          {weather.location.name}, {weather.location.country}
        </h1>
        <h1 className='text-2xl text-stone-400'>{getFormattedDate()}</h1>
      </div>
      <div className='flex justify-center items-center mt-5 lg:mt-10 mb-0'>
        <img
          className='size-16 lg:size-20'
          src={weather.current.condition.icon}
          alt='icon'
        />
      </div>
      <div className='flex items-center justify-center flex-wrap'>
        <h1 className='font-medium relative after:content-["o"] after:-top-1 after:absolute after:size-9 after:text-white min-w-fit px-4 after:text-[3rem] lg:after:text-[4rem] '>
          <span className='text-[6rem] lg:text-[10rem]'>
            {weather.current.temp_c}
          </span>
        </h1>
        <div className='mb-5 lg:mb-0 ml-10 mt-2 text-2xl space-y-6'>
          <div className='flex gap-4 items-center'>
            <img
              className='size-9 lg:size-12'
              src='https://img.icons8.com/?size=100&id=RtDA8YDN9Mi9&format=png&color=ffffff'
              alt='wind'
            />
            <h1>{weather.current.wind_mph} mph</h1>
          </div>
          <div className='flex gap-4 items-center'>
            <img
              className='size-9 lg:size-12'
              src='https://img.icons8.com/?size=100&id=I7Uv9dQ4WLYh&format=png&color=000000'
              alt='humidity'
            />
            <h1>{weather.current.humidity}%</h1>
          </div>
        </div>
      </div>
      <h1 className='tracking-wide text-4xl font-mono font-medium flex-grow'>
        {weather.current.condition.text}
      </h1>

      <div className='flex gap-5 mt-14 items-center justify-center flex-wrap'>
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
  );
}

export default Display;
