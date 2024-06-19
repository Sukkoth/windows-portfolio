import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TaskBar from "@/components/Taskbar/Taskbar";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { useTab } from "@/Provider/TabProvider";
import Main from "@/components/Suspense/Main";

const LockScreen = lazy(() => import("@/components/LockScreen"));

function Layout() {
  const { asleep } = useTab();
  const [showPrev, setShowPrev] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const keysPressed: { [key: string]: boolean } = useMemo(() => {
    return {};
  }, []);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (history.some((item) => item === pathname)) return;
    setHistory((prev) => [...prev, pathname]);
  }, [pathname, history]);

  useEffect(() => {
    function keyDownFunc(event: KeyboardEvent) {
      keysPressed[event.key] = true;

      if (event.key === "Tab") {
        event.preventDefault();
      }

      if (keysPressed["Tab"] && event.key == "Alt") {
        setShowPrev(true);
      }
    }

    function keyUpFunc(event: KeyboardEvent) {
      delete keysPressed[event.key];
      setShowPrev(false);
    }

    document.addEventListener("keydown", keyDownFunc);
    document.addEventListener("keyup", keyUpFunc);

    return () => {
      document.removeEventListener("keydown", keyDownFunc);
      document.removeEventListener("keyup", keyUpFunc);
    };
  }, [keysPressed]);

  if (asleep) {
    return (
      <Suspense fallback={<Main />}>
        <LockScreen />
      </Suspense>
    );
  }

  return (
    <main className='text-white h-[100dvh] overflow-hidden relative'>
      <div className='h-[94.8dvh]'>
        <Outlet />
        {showPrev && (
          <div className='inset-0 z-[99999] absolute flex overflow-scroll gap-10 items-center justify-center'>
            {[...new Set(history)].map((item) => (
              <div
                className='min-w-[25rem] min-h-[15rem] bg-stone-800 ring ring-white ring-offset-4 ring-offset-pink-400 rounded-2xl flex items-center justify-center hover:scale-105 duration-300'
                key={item}
                onClick={() => {
                  setShowPrev(false);
                  navigate(item);
                }}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <TaskBar />
    </main>
  );
}

export default Layout;
