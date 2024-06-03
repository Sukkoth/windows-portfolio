import { ReactNode } from "react";

function ContextItem({
  children,
  icon,
  onClick,
}: {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className='hover:bg-stone-600/70 p-2 rounded-md flex gap-2 select-none'
      onClick={onClick}
    >
      {icon && <img src={icon} className='size-5' />}
      <p>{children}</p>
    </div>
  );
}

export default ContextItem;
