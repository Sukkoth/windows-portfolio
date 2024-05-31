import ItemsList from "./ItemsList";
import StatusBar from "./StatusBar";

function TaskBar() {
  return (
    <div className='fixed flex justify-between items-center bottom-0 left-0 right-0 py-[10px] bg-[#222224] border-t border-t-stone-600 z-[99999]'>
      <div></div>
      <ItemsList />
      <StatusBar />
    </div>
  );
}

export default TaskBar;
