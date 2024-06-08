import { useLocation } from "react-router-dom";

function Breadcrumb() {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  return (
    <div className='hidden lg:flex flex-grow px-2 py-2 items-center capitalize bg-gray-700 rounded-lg'>
      {paths.map((path) => (
        <div key={path} className='flex gap-3 hover:bg-gray-500 px-3'>
          <div className='font-medium'>{path}</div>
          <span className='font-thin'>{">"}</span>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
