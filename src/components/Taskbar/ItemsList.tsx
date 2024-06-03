import Github from "../Folder/Github";
import Todo from "../Folder/Todo";
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
      <Todo />
    </div>
  );
}

export default ItemsList;
