import React from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function Overlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}) {
  const { handler } = useOutsideClick(onClose);

  return (
    <div className='fixed inset-x-0 top-0 bottom-[53px] backdrop-blur-lg center-all z-50'>
      <div
        ref={handler}
        className='dark:bg-shade-300 drop-shadow-2xl border border-gray-700 h-full overflow-y-hidden'
      >
        {children}
      </div>
    </div>
  );
}

export default Overlay;
