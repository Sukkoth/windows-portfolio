function HiddenIcons({ show }: { show: boolean }) {
  return (
    <div
      className={`absolute border-[0.25px] border-black rounded-md bg-[#19192a] z-10 backdrop-blur-2xl p-2 -left-24 flex gap-2 flex-wrap 
    w-[15rem] duration-300 ${
      show ? "-top-[8.5rem] opacity-100" : "top-10 opacity-0"
    } 
  `}
    >
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=S0ohn5C86ABc&format=png&color=000000' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=T7ZuXg03OJzC&format=png&color=000000' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=Ll5spjNBSRx9&format=png&color=000000' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=t0sXJJOlHoXc&format=png&color=ffffff' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=C1F8q77HTw2l&format=png&color=000000' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=19333&format=png&color=000000' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=t3OkO0Hiiz0O&format=png&color=000000' />
      <HiddenIconItem imageUrl='https://img.icons8.com/?size=100&id=YztviYmQLfhl&format=png&color=000000' />
    </div>
  );
}

type HiddenIconItemProps = {
  imageUrl: string;
};
function HiddenIconItem({ imageUrl }: HiddenIconItemProps) {
  return (
    <div className='p-2 rounded-md relative before:absolute before:content-[""]  before:bg-stone-500/30 before:rounded-md before:-z-10 before:-inset-1 before:hidden hover:before:block'>
      <img src={imageUrl} alt='' className='size-5 ' />
    </div>
  );
}

export default HiddenIcons;
