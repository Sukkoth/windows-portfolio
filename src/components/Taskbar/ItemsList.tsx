import TaskbarItem from "./TaskbarItem";
import { useCallback, useRef, useState } from "react";
import Start from "../Start";
import { useLocation } from "react-router-dom";
import { useTab } from "@/Provider/TabProvider";

function ItemsList() {
  const { toggleTerminal, showTerminal } = useTab();
  const [opened, setOpened] = useState(false);
  const startRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  const toggleStart = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <div className='flex-grow w-fit lg:flex-grow-0 px-5 lg:p-0 flex justify-between items-center gap-4 z-50 task-items-list'>
      {/* show start component */}
      {opened && <Start onClose={toggleStart} blackList={startRef.current} />}

      <div
        onClick={() => setOpened((prev) => !prev)}
        ref={startRef}
        className='task-item'
        title='start'
      >
        <img
          className='size-8'
          src='https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000'
        />
      </div>
      <TaskbarItem
        explorer
        to='/explorer'
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
      <div
        onClick={() => toggleTerminal(!showTerminal)}
        className={`task-item ${showTerminal ? "active" : ""}`}
        title='terminal'
      >
        <img
          className='size-8'
          src='https://img.icons8.com/?size=100&id=WbRVMGxHh74X&format=png&color=000000'
        />
      </div>

      {pathname.includes("app/stackblitz") && (
        <TaskbarItem
          to='/app/stackblitz'
          imgUrl='https://developer.stackblitz.com/img/theme/docs-logo.svg'
        />
      )}

      {pathname.includes("app/notepad") && (
        <TaskbarItem
          to='/app/notepad'
          imgUrl='https://img.icons8.com/?size=100&id=Ygov9LJC2LzE&format=png&color=000000'
        />
      )}

      {pathname.includes("app/help") && (
        <TaskbarItem
          to='/app/help'
          imgUrl='https://img.icons8.com/?size=100&id=VQOfeAx5KWTK&format=png&color=000000'
        />
      )}
      {pathname.includes("app/photos") && (
        <TaskbarItem
          to='/app/photos'
          imgUrl='https://img.icons8.com/?size=100&id=QdAGIsBAJMG7&format=png&color=000000'
        />
      )}
    </div>
  );
}

export default ItemsList;
