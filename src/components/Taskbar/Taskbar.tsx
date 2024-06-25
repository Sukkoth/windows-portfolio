import ItemsList from "./ItemsList";
import StatusBar from "./StatusBar";

type Props = {
  toggleQuickSettings: () => void;
  toggleNotificationPanel: () => void;
  // eslint-disable-next-line no-unused-vars
  toggleHiddenIcons: (status?: boolean) => void;
  showingHiddenIcons: boolean;
};

function TaskBar(props: Props) {
  return (
    <div className='absolute flex items-center left-0 right-0 bg-[#222224fb] border-t border-t-stone-700 z-[99999] bottom-0 inset-x-0 h-[3.5rem]'>
      <div className='hidden lg:block w-[15%]'></div>
      <div className='w-full md:w-[70%] flex justify-center items-center'>
        <ItemsList />
      </div>
      <div className='w-fit md:flex ms-10 items-center gap-2 hidden'>
        <StatusBar {...props} />
      </div>
    </div>
  );
}

export default TaskBar;
