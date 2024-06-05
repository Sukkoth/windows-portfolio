function Content() {
  return (
    <div className='w-full h-full p-5 overflow-y-auto pb-20 bg-stone-800'>
      <div className='ml-20 mt-10 '>
        <div className='grid grid-cols-folder gap-3 mb-5 border-b border-b-stone-500'>
          <p>Name</p>
          <p>Status</p>
          <p>Created at</p>
          <p>Updated at</p>
        </div>
        <div className='grid grid-cols-folder gap-3 mb-1 hover:bg-stone-700 p-2 rounded-lg'>
          <div className='flex gap-3'>
            <img
              className='size-5'
              src='https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000'
              alt='ic'
            />
            <p>Todo app</p>
          </div>
          <p>online</p>
          <p>09/5/2024</p>
          <p>25/5/2024</p>
        </div>
        <div className='grid grid-cols-folder gap-3 mb-5 hover:bg-stone-700 p-2 rounded-lg'>
          <div className='flex gap-3'>
            <img
              className='size-5'
              src='https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000'
              alt='ic'
            />
            <p>Task star</p>
          </div>
          <p>offline</p>
          <p>09/5/2024</p>
          <p>25/5/2024</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
