import { useState } from "react";
import { pictures as PICTURES_DATA } from "./data";
import { useLocation, useNavigate } from "react-router-dom";

function Photos() {
  const navigate = useNavigate();
  //get project specific images,
  //set the image id to the index
  //showAllPictures is when you want the app to show all the images
  //but you have to make it start from a specific project
  const {
    state: { projectId, pictureIndex, showAllPictures, showSingle, path },
  } = useLocation();

  const projectToShow = showSingle
    ? [{ imagePath: path }]
    : showAllPictures
    ? PICTURES_DATA
    : PICTURES_DATA.filter((picture) => {
        return picture.projectId === projectId;
      });

  const [showing, setShowing] = useState(
    showSingle
      ? 0
      : showAllPictures
      ? PICTURES_DATA.findIndex((photo) => photo.projectId === projectId) +
        parseInt(pictureIndex || "0")
      : projectToShow.length > 0
      ? parseInt(pictureIndex)
      : 0
  );

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  function handleNav(increment: boolean = false) {
    if (projectToShow.length < 2) return;
    setLoading(true); //set loading true when image resets,
    //it will be set to false when the image loads
    if (increment) {
      if (showing >= projectToShow.length - 1) {
        setShowing(0);
      } else {
        setShowing((prev) => prev + 1);
      }
    } else {
      if (showing === 0) {
        setShowing(projectToShow.length - 1);
      } else setShowing((prev) => prev - 1);
    }
  }

  return (
    <div className='overflow-hidden h-full bg-stone-900'>
      <div className='outline-none h-full object-cover flex flex-col items-center justify-center'>
        {projectToShow.length > 0 ? (
          <>
            <div className='w-full lg:w-[80%] h-[80%] relative'>
              {loading && (
                <div className='absolute inset-0 flex bg-stone-900 items-center justify-center z-10'>
                  <img
                    className='animate-spin size-10 brightness-75'
                    src='https://img.icons8.com/?size=100&id=0BQGp1zaYp5N&format=png&color=ffffff'
                  />
                </div>
              )}
              <img
                onLoad={handleImageLoad}
                src={projectToShow[showing].imagePath}
                alt='image'
                className='object-contain size-full'
              />
            </div>
            <div className='mt-3 w-[50%] p-2 flex justify-between items-center'>
              <MenuItem
                onClick={() => handleNav()}
                imageUrl='https://img.icons8.com/?size=100&id=1806&format=png&color=ffffff'
              />
              <h1 className='text-xl'>
                {showing + 1} | {projectToShow.length}
              </h1>
              <MenuItem
                onClick={() => handleNav(true)}
                imageUrl='https://img.icons8.com/?size=100&id=AgsBKswRnV1i&format=png&color=ffffff'
              />
            </div>
          </>
        ) : (
          <>
            <h1>No images found for the project . . .</h1>
            <button
              className='px-7 py-2 rounded-xl bg-purple-500 mt-3 hover:bg-purple-600'
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

type MenuItemProps = {
  imageUrl: string;
  onClick?: () => void;
};
function MenuItem({ imageUrl, onClick }: MenuItemProps) {
  return (
    <img
      src={imageUrl}
      alt='prev'
      onClick={onClick}
      className='size-12 relative cursor-pointer hover:scale-110 p-2 duration-300 hover:bg-stone-900 hover:rounded-xl'
    />
  );
}

export default Photos;
