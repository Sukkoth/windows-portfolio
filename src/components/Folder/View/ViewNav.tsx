import { useNavigate } from "react-router-dom";

type Props = {
  onSetView: () => void;
};

function ViewNav({ onSetView }: Props) {
  const navigate = useNavigate();

  return (
    <div className='bg-hover-color h-9'>
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
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
}

export default ViewNav;
