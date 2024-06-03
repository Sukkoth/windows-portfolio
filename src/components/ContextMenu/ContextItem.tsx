import { ReactNode } from "react";

function ContextItem({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: string;
}) {
  return (
    <div className='hover:bg-stone-600/70 p-2 rounded-md flex gap-2 select-none'>
      {icon && <img src={icon} className='size-5' />}
      <p>{children}</p>
    </div>
  );
}

export default ContextItem;
