import useTime from "@/hooks/useTime";
import { getFormattedDate } from "@/utils/date";

function Time({
  toggleNotificationPanel,
}: {
  toggleNotificationPanel: () => void;
}) {
  const { formatedTime } = useTime();
  return (
    <div
      onClick={toggleNotificationPanel}
      className='text-xs px-3 mx-3 text-end flex items-center gap-4 font-medium   relative before:content-[" "] before:-left-1 w-full h-full before:-right-1 before:-top-2 before:-bottom-2 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg before:hidden hover:before:block cursor-pointer  before:shadow-inner before:shadow-stone-700'
    >
      <div className='font-extralight tracking-wider'>
        <p>{formatedTime}</p>
        <p>{getFormattedDate()}</p>
      </div>
    </div>
  );
}

export default Time;
