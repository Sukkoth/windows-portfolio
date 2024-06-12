import { createContext, useContext, useEffect, useState } from "react";

//DEFINE CONTEXT
export const TabContext = createContext<{
  // eslint-disable-next-line no-unused-vars
  toggleAsleep: (state: boolean) => void;
  asleep: boolean;
}>({
  toggleAsleep: () => {},
  asleep: true,
});

type Props = {
  children: React.ReactNode;
};
function TabProvider({ children }: Props) {
  const [asleep, setAsleep] = useState(true);

  function toggleAsleep(state: boolean) {
    localStorage.setItem("locked", JSON.stringify(state));
    setAsleep(state);
  }

  useEffect(() => {
    setAsleep(JSON.parse(localStorage.getItem("locked") || "true"));
  }, []);

  return (
    <TabContext.Provider
      value={{
        asleep,
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
