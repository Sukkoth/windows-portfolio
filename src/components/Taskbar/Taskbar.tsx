import ItemsList from "./ItemsList";
import StatusBar from "./StatusBar";

function TaskBar({ toggleQuickSettings }: { toggleQuickSettings: () => void }) {
  return (
    <div className='absolute flex justify-between items-center left-0 right-0 bg-[#222224fb] border-t border-t-stone-700  z-[99999] bottom-0 inset-x-0 h-[3.5rem]'>
      <div className='hidden lg:block w-40'></div>
      <ItemsList />
      <StatusBar toggleQuickSettings={toggleQuickSettings} />
    </div>
  );
}

export default TaskBar;
