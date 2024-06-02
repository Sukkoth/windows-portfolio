import Github from "../Folder/Github";
import Projects from "../Folder/Projects";
import Weather from "../Folder/Weather";
import TaskbarItem from "./TaskbarItem";

function ItemsList() {
  return (
    <div className='flex justify-between items-center gap-4 z-50'>
      <TaskbarItem
        id='start'
        imgUrl='https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000'
      />
      <Projects />
      <Github />
      <Weather />
      <TaskbarItem
        id='linkedin'
        imgUrl='https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000'
      />
      <TaskbarItem
        id='telegram'
        imgUrl='https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000'
      />
    </div>
  );
}

export default ItemsList;
