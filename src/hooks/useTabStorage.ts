import { useEffect, useState } from "react";

function useTabStorage() {
  const [tabId, setTabId] = useState<null | string>(null);

  useEffect(() => {
    const getTabStorage = () => {
      const active = JSON.parse(localStorage.active || "");
      setTabId(active);
    };

    window.addEventListener("storage", getTabStorage);

    return () => {
      window.removeEventListener("storage", getTabStorage);
    };
  }, []);

  return { tabId, setTabId };
}

export default useTabStorage;
