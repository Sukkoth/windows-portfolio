import Battery from "./Battery";
import Network from "./Network";
import Time from "./Time";

function StatusBar() {
  return (
    <div className='items-center gap-2 hidden lg:flex'>
      <div className='flex items-center gap-2 relative before:content-[" "] before:-left-4 w-full h-full before:-right-4 before:-top-3 before:-bottom-3 before:bg-hover-color before:absolute before:-z-10 before:rounded-lg before:hidden hover:before:block cursor-pointer  before:shadow-inner before:shadow-stone-700'>
        <Network />
        <Battery />
      </div>
      <Time />
    </div>
  );
}

export default StatusBar;
