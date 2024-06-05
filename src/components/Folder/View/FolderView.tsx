import { useState } from "react";
import { Outlet } from "react-router-dom";
import ViewNav from "./ViewNav";

function FolderView() {
  const [maxView, setMaxView] = useState<boolean>(
    JSON.parse(localStorage.getItem("maxView") || "true")
  );

  function toggleMaxView() {
    setMaxView((prev) => !prev);
    localStorage.setItem("maxView", JSON.stringify(!maxView));
  }

  const maxToggledClass = `${!maxView ? "scale-75" : ""}`;

  return (
    <div
      className={`text-white bg-[#0402157f] w-full h-full overflow-hidden ${maxToggledClass}`}
    >
      <ViewNav onSetView={toggleMaxView} />
      <div className='overflow-y-auto h-full'>{<Outlet />}</div>
    </div>
  );
}

export default FolderView;
