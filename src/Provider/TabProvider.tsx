import { createContext, useContext, useEffect, useState } from "react";

//DEFINE CONTEXT
export const TabContext = createContext<{
  // eslint-disable-next-line no-unused-vars
  toggleAsleep: (state: boolean) => void;
  asleep: boolean;
  showTerminal: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleTerminal: (state: boolean) => void;
}>({
  toggleAsleep: () => {},
  asleep: true,
  showTerminal: false,
  toggleTerminal: () => {},
});

type Props = {
  children: React.ReactNode;
};
function TabProvider({ children }: Props) {
  const [asleep, setAsleep] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);

  function toggleAsleep(state: boolean) {
    localStorage.setItem("locked", JSON.stringify(state));
    setAsleep(state);
  }
  function toggleTerminal(state: boolean) {
    setShowTerminal(state);
  }

  useEffect(() => {
    setAsleep(JSON.parse(localStorage.getItem("locked") || "true"));
  }, []);

  return (
    <TabContext.Provider
      value={{
        asleep,
        toggleAsleep,
        showTerminal,
        toggleTerminal,
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
