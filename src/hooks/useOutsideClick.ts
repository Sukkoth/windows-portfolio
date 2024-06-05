import React, { useCallback, useEffect } from "react";

type ListItem = HTMLDivElement | null;

type Props = {
  action: () => void;
  blackList: ListItem[];
};

/**
 * useOutsideClick
 *
 * This custom hook detects clicks outside of a specified DOM element and triggers an action. It also allows
 * certain elements, specified in a blacklist, to be ignored as triggers for the outside click detection. This is
 * particularly useful for implementing dropdowns, modals, or any component that needs to close or perform an action
 * when a user clicks outside of it.
 *
 * Props:
 * - action: A callback function to be executed when a click is detected outside the specified element and any
 *   elements in the blacklist.
 * - blackList: An array of HTMLDivElement references that should be ignored when detecting outside clicks. This
 *   prevents the action from being triggered if the click happens within any of these elements.
 *
 * Returns:
 * - An object containing a `handler` ref, which should be attached to the element you want to detect outside clicks for.
 *
 * Usage:
 * const { handler } = useOutsideClick({ action: () => console.log('Clicked outside'), blackList: [triggerRef] });
 * <div ref={handler}>Content</div>
 */

export default function useOutsideClick({ action, blackList }: Props) {
  const clickRef = React.useRef<HTMLDivElement | null>(null);

  const listener = useCallback(
    (e: MouseEvent) => {
      if (!clickRef.current) return;

      //if the node is in blacklist, ignore excuting the function
      if (blackList.some((element) => element?.contains(e.target as Node))) {
        return;
      }

      //this executes only outside the div and it's tiggering buttons (which ever div is passed in blacklist array)
      if (!clickRef.current.contains(e.target as Node)) {
        action();
      }
    },
    [action, blackList]
  );

  useEffect(() => {
    document.addEventListener("click", listener, true);
    return () => {
      document.removeEventListener("click", listener, true);
    };
  }, [listener]);

  return { handler: clickRef };
}
