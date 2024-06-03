import { createContext, useContext, useEffect, useState } from "react";

//DEFINE CONTEXT
export const TabContext = createContext<{
  activeTab: string | null;
  toggleTab: (setOpen: string | null) => void;
  toggleAsleep: (state: boolean) => void;
  asleep: boolean;
}>({
  activeTab: null,
  toggleTab: () => {},
  toggleAsleep: () => {},
  asleep: false,
});

type Props = {
  children: React.ReactNode;
};
function TabProvider({ children }: Props) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [asleep, setAsleep] = useState(false);

  function toggleTab(setOpen: string | null) {
    setActiveTab(setOpen);
  }
  function toggleAsleep(state: boolean) {
    localStorage.setItem("locked", JSON.stringify(state));
    setAsleep(state);
  }

  useEffect(() => {
    setAsleep(JSON.parse(localStorage.getItem("locked") || "false"));
  }, []);

  return (
    <TabContext.Provider
      value={{
        asleep,
        activeTab,
        toggleTab,
        toggleAsleep,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTab() {
  return useContext(TabContext);
}

export default TabProvider;
