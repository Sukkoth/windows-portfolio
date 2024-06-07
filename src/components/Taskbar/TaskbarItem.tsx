import { NavLink } from "react-router-dom";

function TaskbarItem({ imgUrl, to }: { imgUrl: string; to: string }) {
  return (
    <NavLink to={to} className='task-item' title={to}>
      <img src={imgUrl} alt='img' className='size-8' />
    </NavLink>
  );
}

export default TaskbarItem;
