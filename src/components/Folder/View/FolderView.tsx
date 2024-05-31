import { useTab } from "@/Provider/TabProvider";
import Modal from "@/components/Modal";

type Props = {
  children: React.ReactNode;
  id: string;
};

function FolderView({ children, id }: Props) {
  const { activeTab } = useTab();

  return (
    <div
      className={`text-white fixed top-0 left-0 right-0 bg-stone-900 z-50 backdrop:shadow-2xl h-full ${
        activeTab === id ? "text-green-500" : ""
      }`}
    >
      <div className='bg-hover-color h-9'>
        <div className='flex items-center gap-2 float-end pl-3'>
          <img
            className='modal-icons'
            src='https://img.icons8.com/?size=100&id=8193&format=png&color=ffffff'
            alt=''
          />
          <img
            className='modal-icons'
            src='https://img.icons8.com/?size=100&id=98023&format=png&color=ffffff'
            alt=''
          />
          <Modal.Button type='CLOSE'>
            <img
              className='modal-icons hover:bg-red-600'
              src='https://img.icons8.com/?size=100&id=8112&format=png&color=ffffff'
              alt=''
            />
          </Modal.Button>
        </div>
      </div>
      <div id='content' className='overflow-hidden h-full'>
        {children}
      </div>
    </div>
  );
}

export default FolderView;
