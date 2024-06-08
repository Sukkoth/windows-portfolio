import { Outlet } from "react-router-dom";

function Folder() {
  return (
    <div className='w-full h-full'>
      <Outlet />
    </div>
  );
}

export default Folder;
