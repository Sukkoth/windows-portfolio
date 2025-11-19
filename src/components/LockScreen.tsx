import { formatTime } from "@/utils/date";
import { useTab } from "@/Provider/TabProvider";

function LockScreen() {
  const { toggleAsleep } = useTab();
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      onDoubleClick={() => toggleAsleep(false)}
      className={`backdrop-blur-lg h-[100dvh] flex items-center flex-col select-none text-white relative`}
    >
      <h1 className='text-[6rem] md:text-[10rem] font-medium tracking-wide mt-[2rem] md:mt-[3rem]'>
        {formatTime()}
      </h1>
      <p className='text-xl md:text-3xl md:-mt-8 -mt-3'>{formattedDate}</p>
      <img
        className='my-3 size-10 md:size-20'
        src='https://img.icons8.com/?size=100&id=1F5Aok9b4nxz&format=png&color=000000'
        alt=''
      />
      <p className='font-extralight tracking-wider text-sm'>
        🤩 Double Click to unlock
      </p>
    </div>
  );
}

export default LockScreen;
