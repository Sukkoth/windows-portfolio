function TaskbarItem({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="relative before:content-[' '] before:-left-[6px] before:-right-2 before:-top-[6px] before:-bottom-[6px] before:bg-hover-color before:absolute before:-z-10 before:rounded-lg before:hidden hover:before:block cursor-pointer  before:shadow-inner before:shadow-stone-700">
      <img src={imgUrl} alt='img' className='size-8' />
    </div>
  );
}

export default TaskbarItem;
