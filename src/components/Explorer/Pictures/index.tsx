import PhotoFolder from "@/components/Apps/Photos/PhotoFolder";
import { pictures as PICTURES_DATA } from "@/components/Apps/Photos/data";
import { Photo } from "@/components/Apps/Photos/types";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pictures() {
  const navigate = useNavigate();
  const [marked, setMarked] = useState<null | string>();
  const { handler } = useOutsideClick({
    action: () => setMarked(null),
    blackList: [],
  });
  const groupedItems: { [key: number]: Photo[] } = {};
  for (let index = 0; index < PICTURES_DATA.length; index++) {
    const element = PICTURES_DATA[index];
    if (Object.keys(groupedItems).includes(`${element.projectId}`)) {
      groupedItems[element.projectId].push(element);
    } else {
      groupedItems[element.projectId] = [element];
    }
  }
  return (
    <div className='flex-1 border border-stone-600 border-l-0 h-full overflow-y-auto'>
      <div
        className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-2'
        ref={handler}
      >
        {Object.keys(groupedItems).map((key) => (
          <div
            className='size-fit md:size-full'
            key={key}
            onDoubleClick={() =>
              navigate("/app/photos", {
                state: {
                  pictureIndex: 0,
                  projectId: parseInt(key || "0"),
                  backTo: location.pathname,
                  showAllPictures: true,
                },
              })
            }
            onClick={() => setMarked(key)}
          >
            <PhotoFolder
              title={groupedItems[parseInt(key)][0].projectName}
              marked={key === marked}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pictures;
