import { ReactNode } from "react";

function ContextItem({
  children,
  icon,
  onClick,
  groupId,
}: {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
  groupId?: string;
}) {
  return (
    <div
      className={`hover:bg-stone-600/50 p-2 rounded-md flex gap-2 select-none relative ${
        groupId ? "group/" + groupId : ""
      }`}
      onClick={onClick}
    >
      {icon && <img src={icon} className='size-5' />}
      <div>{children}</div>
    </div>
  );
}

export default ContextItem;
