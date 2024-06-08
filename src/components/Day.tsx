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
    <h1 className='mt-24 text-center text-4xl md:text-6xl xl:text-8xl font-anurati uppercase tracking-widest'>
      {weekdays[today]}
    </h1>
  );
}

export default Day;
