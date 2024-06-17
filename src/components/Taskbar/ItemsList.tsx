import TaskbarItem from "./TaskbarItem";
import { useCallback, useRef, useState } from "react";
import Start from "../Start";
import { useLocation } from "react-router-dom";

function ItemsList() {
  const [opened, setOpened] = useState(false);
  const startRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  const toggleStart = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <div className='flex-grow lg:flex-grow-0 px-5 lg:p-0 flex justify-between items-center gap-4 z-50 task-items-list'>
      {/* show start component */}
      {opened && <Start onClose={toggleStart} blackList={startRef.current} />}

      <div
        onClick={() => setOpened((prev) => !prev)}
        ref={startRef}
        className='task-item'
      >
        <img
          className='size-8'
          src='https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000'
        />
      </div>
      <TaskbarItem
        to='/explorer/projects'
        imgUrl='https://img.icons8.com/?size=100&id=GzCW12vGkSHM&format=png&color=000000'
      />
      <TaskbarItem
        to='/app/github'
        imgUrl='https://img.icons8.com/?size=120&id=AZOZNnY73haj&format=png&color=000000'
      />
      <TaskbarItem
        to='/app/weather'
        imgUrl='https://img.icons8.com/?size=100&id=zIVmoh4T8wh7&format=png&color=000000'
      />
      <TaskbarItem
        to='/app/todo'
        imgUrl='https://img.icons8.com/?size=100&id=HpPqCqynotVp&format=png&color=000000'
      />
      {pathname.includes("app/notepad") && (
        <TaskbarItem
          to='/app/notepad'
          imgUrl='https://img.icons8.com/?size=100&id=Ygov9LJC2LzE&format=png&color=000000'
        />
      )}
    </div>
  );
}

export default ItemsList;
