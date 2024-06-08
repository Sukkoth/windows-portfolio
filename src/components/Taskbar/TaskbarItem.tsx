import { Link, useLocation } from "react-router-dom";

type Props = { imgUrl: string; to: string };

function TaskbarItem({ imgUrl, to }: Props) {
  const { pathname } = useLocation();

  //if pathname is the same, => close the app
  //else, => open the app
  //it's like a toggle button
  const redirectProps = {
    to: pathname === to ? "/" : to,
    replace: pathname === to,
  };

  return (
    <Link
      {...redirectProps}
      className={`task-item ${pathname === to ? "active" : ""}`}
    >
      <img src={imgUrl} alt='img' className='size-8' />
    </Link>
  );
}

export default TaskbarItem;
