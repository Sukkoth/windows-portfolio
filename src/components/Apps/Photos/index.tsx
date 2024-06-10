import { useState } from "react";
import { pictures } from "./data";

function Photos() {
  const [showing, setShowing] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  function handleNav(increment: boolean = false) {
    setLoading(true); //set loading true when image resets,
    //it will be set to false when the image loads
    if (increment) {
      if (showing >= pictures.length - 1) {
        setShowing(0);
      } else {
        setShowing((prev) => prev + 1);
      }
    } else {
      if (showing === 0) {
        setShowing(pictures.length - 1);
      } else setShowing((prev) => prev - 1);
    }
  }

  return (
    <div className='overflow-hidden h-full bg-stone-900'>
      <div className='outline-none h-full object-cover flex flex-col items-center justify-center'>
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
            src={pictures[showing].path}
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
            {showing + 1} | {pictures.length}
          </h1>
          <MenuItem
            onClick={() => handleNav(true)}
            imageUrl='https://img.icons8.com/?size=100&id=AgsBKswRnV1i&format=png&color=ffffff'
          />
        </div>
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
