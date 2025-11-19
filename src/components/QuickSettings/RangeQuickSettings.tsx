import { useEffect, useState } from "react";

function RangeQuickSettings() {
  const [brightness, setBrightness] = useState(100);
  useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);
  return (
    <>
      <div className='w-full flex gap-6 mt-10'>
        <img
          src='https://img.icons8.com/?size=100&id=82718&format=png&color=ffffff'
          alt=''
          className='size-3'
        />
        <input
          className='fill-blue-500 w-full'
          type='range'
          name='brightness'
          id=''
          min={35}
          max={100}
          value={brightness}
          onChange={(e) => setBrightness(parseInt(e.target.value))}
        />
      </div>
      <div className='w-full flex gap-6 mt-4'>
        <img
          src='https://img.icons8.com/?size=100&id=aly31hIgVdwr&format=png&color=ffffff'
          alt=''
          className='size-3'
        />
        <input
          className='fill-blue-500 w-full'
          type='range'
          name='brightness'
          id=''
        />
      </div>
    </>
  );
}

export default RangeQuickSettings;
