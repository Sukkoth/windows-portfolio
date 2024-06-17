import { useNavigate } from "react-router-dom";

function NavBars() {
  const navigate = useNavigate();

  //left - right -up - reload nav bar on file explorer
  return (
    <div className='flex gap-6 items-center '>
      <img
        className='size-7 hover:bg-gray-600 hover:scale-110 rounded-lg duration-300 p-1'
        src='https://img.icons8.com/?size=100&id=20i9yZTsnnmg&format=png&color=ffffff'
        onClick={() => navigate(-1)}
      />

      <img
        className={`size-7 hover:bg-gray-600 hover:scale-110 rounded-lg duration-300 p-1`}
        src='https://img.icons8.com/?size=100&id=b8rKT75QG14x&format=png&color=ffffff'
        onClick={() => navigate(1)}
      />

      <img
        className='size-7 hover:bg-gray-600 hover:scale-110 rounded-lg duration-300 p-1'
        src='https://img.icons8.com/?size=100&id=PYPhzJ8I0tKb&format=png&color=ffffff'
        alt=''
      />

      <img
        className='size-7 hover:bg-gray-600 hover:scale-110 rounded-lg duration-300 p-1'
        src='https://img.icons8.com/?size=100&id=0BQGp1zaYp5N&format=png&color=ffffff'
        onClick={() => window.location.reload()}
      />
    </div>
  );
}

export default NavBars;
