import { useState } from "react";
import { Outlet } from "react-router-dom";
import ViewNav from "@/Layouts/ViewNav";

function FolderView({
  children,
  type = "app",
  onClose,
  withOutlet = true,
}: {
  children?: React.ReactNode;
  type: "app" | "folder";
  onClose?: () => void;
  withOutlet?: boolean;
}) {
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
      <ViewNav onSetView={toggleMaxView} type={type} onClose={onClose} />
      <div className='overflow-y-auto h-full'>
        {withOutlet ? <Outlet /> : children}
      </div>
    </div>
  );
}

export default FolderView;
