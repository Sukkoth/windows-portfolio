import { useTab } from "@/Provider/TabProvider";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  id: string;
};

function FolderView({ children, id }: Props) {
  const { activeTab } = useTab();
  const [maxView, setMaxView] = useState<boolean>(
    JSON.parse(localStorage.getItem("maxView") || "true")
  );

  useEffect(() => {
    localStorage.setItem("maxView", JSON.stringify(maxView));
  }, [maxView]);

  return (
    <div
      className={`${
        !maxView ? "scale-75" : ""
      } text-white fixed top-0 left-0 right-0 z-50 bg-[#0402157f] backdrop:shadow-3xl h-full ${
        activeTab === id ? "text-green-500" : ""
      }`}
    >
      <div className='bg-hover-color h-9'>
        <div className='flex items-center gap-2 float-end pl-3'>
          <img
            className='modal-icons'
            src='https://img.icons8.com/?size=100&id=98023&format=png&color=ffffff'
            alt=''
            onClick={() => setMaxView((prev) => !prev)}
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
      <div
        id='content'
        className='overflow-hidden h-[90.5dvh] backdrop-blur-3xl'
      >
        {children}
      </div>
    </div>
  );
}

export default FolderView;
