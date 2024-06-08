import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  onSetView: () => void;
  onClose?: () => void;
  type: "folder" | "app";
};

function ViewNav({ onSetView, type = "app", onClose }: Props) {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const paths = pathname.split("/");
  const pathToDisplay = paths[paths.length - 1];

  function handleClose() {
    //*case 1: if you have onClose, handle that using the close button
    //*case 2: //if state has backTo, the apps and folders need to go back specific
    //*route rather than navigating back (-1)
    //*case 3: navigate back (-1)

    return onClose
      ? onClose()
      : state?.backTo
      ? navigate(state.backTo, {
          replace: state.replace,
        })
      : navigate("/", {
          replace: true,
        });
  }

  return (
    <div className='bg-hover-color h-9 flex justify-between select-none items-center'>
      {type === "folder" ? (
        <div className='h-full px-3 py-0 flex rounded-tr-xl items-center justify-between bg-gray-700 text-sm w-64'>
          <p className='capitalize'>{pathToDisplay}</p>
          <p
            className='cursor-pointer px-3 py-1 hover:bg-red-500'
            onClick={handleClose}
          >
            x
          </p>
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
          onClick={handleClose}
        />
      </div>
    </div>
  );
}

export default ViewNav;
