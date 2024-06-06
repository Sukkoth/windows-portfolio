import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  onSetView: () => void;
  type: "folder" | "app";
};

function ViewNav({ onSetView, type = "app" }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const paths = pathname.split("/");
  const pathToDisplay = paths[paths.length - 1];

  return (
    <div className='bg-hover-color h-9 flex justify-between items-center'>
      {type === "folder" ? (
        <div className='h-full px-3 py-0 flex rounded-tr-xl items-center justify-between bg-gray-700 text-sm w-40'>
          <p className='capitalize'>{pathToDisplay}</p>
          <p className='cursor-pointer px-3 py-1 hover:bg-red-500'>x</p>
        </div>
      ) : (
        <div></div>
      )}
      <div className='flex items-center gap-2 float-end pl-3'>
        <img
          className='modal-icons'
          src='https://img.icons8.com/?size=100&id=98023&format=png&color=ffffff'
          alt=''
          onClick={onSetView}
        />
        <img
          className='modal-icons hover:bg-red-600'
          src='https://img.icons8.com/?size=100&id=8112&format=png&color=ffffff'
          alt=''
          onClick={() =>
            navigate("/", {
              replace: true,
            })
          }
        />
      </div>
    </div>
  );
}

export default ViewNav;
