import { Outlet } from "react-router-dom";
import Menu from "./Projects/Menu";
import ExplorerNav from "./ExplorerNav";

function ExplorerView() {
  return (
    <div className='w-full h-full  overflow-y-auto pb-20 bg-stone-800 flex flex-col'>
      <ExplorerNav />
      <div className='flex w-full flex-grow'>
        <div className='w-1/6 h-full border border-stone-600'>
          <Menu />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default ExplorerView;
