function ProjectItem() {
  return (
    <div className='border border-stone-700 rounded-2xl overflow-hidden hover:scale-105 duration-300'>
      <img
        src='assets/homepage0.png'
        alt='image'
        className='w-full h-48 object-cover'
      />
      <div className='bg-stone-700/30 backdrop:blur-2xl py-5 px-4'>
        <div>
          <span className='text-lg'>Title: </span>
          <span className='text-lg'>Taskade</span>
        </div>
        <div>
          <span className='text-lg'>Description: </span>
          <span className='text-lg font-mono text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            expedita quod? Voluptates aperiam consequatur dolore labore! Tempora
            minus ullam vitae.
          </span>
        </div>
        <div>
          <span className='text-lg'>Stack: </span>
          {["JavaScript", "TailwindCSS"].map((stack) => (
            <span className='mx-1 font-mono'>#{stack}</span>
          ))}
        </div>
        <button className='bg-purple-500 px-5 py-2 rounded-xl ring-2 ring-offset-2 ring-black'>
          View Live
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;
