type Props = {
  title: string;
  marked: boolean;
};
function PhotoFolder({ title, marked }: Props) {
  return (
    <div
      className={`p-2 rounded-lg flex flex-col justify-start items-start text-sm overflow-hidden hover:bg-stone-900 ${
        marked ? "bg-stone-900 before:block" : "before:hidden"
      } relative before:content-['✅'] before:absolute before:top-0 before:left-0 `}
    >
      <img
        className='sm:size-20 md:size-28'
        src='https://img.icons8.com/?size=100&id=zqxl7tOwTyfM&format=png&color=000000'
        alt='image folder'
      />
      <p className='text-ellipsis line-clamp-2'>{title}</p>
    </div>
  );
}

export default PhotoFolder;
