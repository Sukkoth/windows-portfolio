import useOutsideClick from "@/hooks/useOutsideClick";
import Footer from "./Footer";
import QuickSettingsList from "./QuickSettingsList";
import RangeQuickSettings from "./RangeQuickSettings";

type Props = {
  active: boolean;
  onClose: () => void;
  blackList: HTMLDivElement | null;
};
function QuickSettings({ active = false, blackList, onClose }: Props) {
  const { handler } = useOutsideClick({
    action: onClose,
    blackList: [blackList],
  });
  return (
    <div
      ref={handler}
      className={`absolute duration-300 ${
        !active ? "-bottom-96" : "bottom-16"
      } right-5 border border-stone-600 bg-stone-700/90 rounded-md z-[9999] text-sm font-extralight w-80 overflow-hidden`}
    >
      <div className='p-5'>
        <QuickSettingsList />
        <RangeQuickSettings />
      </div>
      <Footer />
    </div>
  );
}

export default QuickSettings;
