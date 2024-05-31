import Github from "../Folder/Github";
import Projects from "../Folder/Projects/Projects";
import TaskbarItem from "./TaskbarItem";

function ItemsList() {
  return (
    <div className='flex justify-between items-center gap-4'>
      <TaskbarItem imgUrl='https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000' />
      <Projects />
      <Github />
      <TaskbarItem imgUrl='https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000' />
      <TaskbarItem imgUrl='https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000' />
    </div>
  );
}

export default ItemsList;
