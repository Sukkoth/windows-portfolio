import { Outlet } from "react-router-dom";
import Menu from "./Projects/Menu";
import ExplorerNav from "./ExplorerNav";

function ExplorerView() {
  return (
    <div className='w-full h-full pb-20 bg-stone-800'>
      <ExplorerNav /> {/* //back forward up reload component */}
      <div className='flex h-full w-full flex-col lg:flex-row'>
        <div className='w-full lg:w-[25%] xl:w-[15%] lg:h-full border border-stone-600'>
          <Menu />
        </div>
        <div className='lg:w-[75%] xl:w-[85%] h-full overflow-hidden'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ExplorerView;
