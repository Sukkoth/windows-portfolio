import React, { useEffect } from "react";

export default function useOutsideClick(action: () => void) {
  const clickRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (clickRef !== null) {
        if (!clickRef.current?.contains(e.target as Node)) {
          action();
        }
      }
    };

    document.addEventListener("click", listener, true);

    return () => {
      document.removeEventListener("click", listener, true);
    };
  }, [action]);

  return { handler: clickRef };
}
