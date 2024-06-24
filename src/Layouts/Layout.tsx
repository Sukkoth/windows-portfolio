import { Outlet } from "react-router-dom";
import TaskBar from "@/components/Taskbar/Taskbar";
import { Suspense, lazy, useCallback, useRef, useState } from "react";
import { useTab } from "@/Provider/TabProvider";
import Main from "@/components/Suspense/Main";
import Terminal from "@/components/Apps/Terminal";
import QuickSettings from "@/components/QuickSettings";
import NotificationPanel from "@/components/NotificationPanel";
import HiddenIcons from "@/components/Taskbar/HiddenIcons";

const LockScreen = lazy(() => import("@/components/LockScreen"));

function Layout() {
  const { asleep, showTerminal } = useTab();
  const [showQuickSettings, setShowQuickSettings] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showHiddenIcons, setShowHiddenIcons] = useState(false);
  const taskBarRef = useRef<HTMLDivElement | null>(null); //to blacklist for quicksettings

  const toggleQuickSettings = useCallback(() => {
    setShowQuickSettings((prev) => {
      if (prev === false) {
        setShowHiddenIcons(false);
        setShowNotificationPanel(false);
      }
      return !prev;
    });
  }, []);

  const toggleNotificationPanel = useCallback(() => {
    setShowNotificationPanel((prev) => {
      if (prev === false) {
        setShowQuickSettings(false);
        setShowHiddenIcons(false);
      }
      return !prev;
    });
  }, []);

  const toggleHiddenIcons = useCallback(() => {
    setShowHiddenIcons((prev) => {
      if (prev === false) {
        setShowQuickSettings(false);
        setShowNotificationPanel(false);
      }
      return !prev;
    });
  }, []);

  if (asleep) {
    return (
      <Suspense fallback={<Main />}>
        <LockScreen />
      </Suspense>
    );
  }

  return (
    <main className='text-white h-[100dvh] text-sm overflow-hidden relative'>
      <div className='h-[94.8dvh]'>
        <Outlet />
      </div>
      <div ref={taskBarRef}>
        <TaskBar
          toggleQuickSettings={toggleQuickSettings}
          toggleNotificationPanel={toggleNotificationPanel}
          toggleHiddenIcons={toggleHiddenIcons}
        />
      </div>

      <QuickSettings
        onClose={() => setShowQuickSettings(false)}
        active={showQuickSettings}
        blackList={taskBarRef.current}
      />

      <NotificationPanel
        onClose={() => setShowNotificationPanel(false)}
        active={showNotificationPanel}
        blackList={taskBarRef.current}
      />
      <HiddenIcons
        active={showHiddenIcons}
        onClose={() => setShowHiddenIcons(false)}
        blackList={taskBarRef.current}
      />
      {showTerminal && <Terminal />}
    </main>
  );
}

export default Layout;
