import { createContext, useContext, useState } from "react";

//DEFINE CONTEXT
export const TabContext = createContext<{
  activeTab: string | null;
  toggleTab: (setOpen: string | null) => void;
}>({
  activeTab: null,
  toggleTab: () => {},
});

type Props = {
  children: React.ReactNode;
};
function TabProvider({ children }: Props) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  function toggleTab(setOpen: string | null) {
    setActiveTab(setOpen);
  }

  return (
    <TabContext.Provider
      value={{
        activeTab,
        toggleTab,
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
