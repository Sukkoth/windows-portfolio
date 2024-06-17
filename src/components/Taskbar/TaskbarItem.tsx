import { Link, useLocation } from "react-router-dom";

type Props = { imgUrl: string; to: string; explorer?: boolean };

//the explorer is used to track the explorer routes since it has nested routes
function TaskbarItem({ imgUrl, to, explorer = false }: Props) {
  const { pathname } = useLocation();

  //if pathname is the same, => close the app
  //else, => open the app
  //it's like a toggle button
  const redirectProps = {
    to:
      pathname === to || (explorer && pathname.includes("explorer")) ? "/" : to,
    replace: pathname === to || (explorer && pathname.includes("explorer")),
  };

  return (
    <Link
      {...redirectProps}
      className={`task-item ${
        pathname === to || (explorer && pathname.includes("explorer"))
          ? "active"
          : ""
      }`}
    >
      <img src={imgUrl} alt='img' className='size-8' />
    </Link>
  );
}

export default TaskbarItem;
