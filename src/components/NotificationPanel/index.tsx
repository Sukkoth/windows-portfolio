import useOutsideClick from "@/hooks/useOutsideClick";
import Calendar from "./Calendar";
import NewsList from "./NewsList";

type Props = {
  active: boolean;
  onClose: () => void;
  blackList: HTMLDivElement | null;
};
function NotificationPanel({ active = false, blackList, onClose }: Props) {
  const { handler } = useOutsideClick({
    action: onClose,
    blackList: [blackList],
  });
  return (
    <div
      ref={handler}
      className={`absolute duration-300  ${
        !active ? "-right-96" : "right-6"
      } bottom-16 rounded-md z-[9999] text-sm font-extralight w-80 overflow-hidden`}
    >
      <NewsList />
      <Calendar />
    </div>
  );
}

export default NotificationPanel;
