import Breadcrumb from "./Breadcrumb";
import NavBars from "./NavBars";

function ExplorerNav() {
  return (
    <div className='p-1 bg-gray-800 flex gap-10'>
      <NavBars />
      <Breadcrumb />
    </div>
  );
}

export default ExplorerNav;
