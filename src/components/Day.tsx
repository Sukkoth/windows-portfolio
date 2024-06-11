function Day() {
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
    <h1 className='absolute  inset-x-0 top-36 text-center text-2xl sm:text-4xl  md:text-6xl xl:text-8xl font-anurati uppercase tracking-widest'>
      {weekdays[today]}
    </h1>
  );
}

export default Day;
