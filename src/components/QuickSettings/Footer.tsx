function Footer() {
  return (
    <div className='mt-5 bg-stone-800 px-4 py-3 w-full flex justify-between border-t border-t-stone-800/70'>
      <div className='relative before:content-[""] before:-inset-2 before:absolute before:bg-stone-900/80 before:hidden before:hover:block before:-z-50 z-10 before:rounded-lg'>
        <img
          src='https://img.icons8.com/?size=100&id=SmJ2dwxsDrB3&format=png&color=ffffff'
          alt=''
          className='size-5'
        />
      </div>
      <div className='flex gap-3'>
        <div className='relative before:content-[""] before:-inset-2 before:absolute before:bg-stone-900/80 before:hidden before:hover:block before:-z-50 z-10 before:rounded-lg'>
          <img
            className='size-5'
            src='
            https://img.icons8.com/?size=100&id=xDUTyvJywkJg&format=png&color=ffffff'
            alt=''
          />
        </div>
        <div className='relative before:content-[""] before:-inset-2 before:absolute before:bg-stone-900/80 before:hidden before:hover:block before:-z-50 z-10 before:rounded-lg'>
          <img
            src='https://img.icons8.com/?size=100&id=4511GGVppfIx&format=png&color=ffffff'
            alt=''
            className='size-5'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
