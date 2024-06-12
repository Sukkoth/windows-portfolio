type Props = {
  title: string;
  imageUrl: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
};
function DesktopIconItem({ title, imageUrl, onClick, onDoubleClick }: Props) {
  return (
    <div
      className='text-sm flex flex-col items-center justify-center hover:bg-stone-600/50 p-2 rounded-lg'
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <img className='size-10' src={imageUrl} alt='desktopIcon' />
      <p className='sm-only:hidden'>{title}</p>
    </div>
  );
}

export default DesktopIconItem;
