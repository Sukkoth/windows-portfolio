import useTime from "@/hooks/useTime";

function Day() {
  const { formatedTime } = useTime();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();

  return (
    <div className='absolute inset-x-0 top-36 text-center text-4xl sm:text-4xl md:text-6xl xl:text-8xl font-anurati uppercase tracking-widest -z-10'>
      <h1> {weekdays[today]}</h1>
      <h3 className='mt-5 text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-bold font-time-font'>
        {formatedTime}
      </h3>
    </div>
  );
}

export default Day;
