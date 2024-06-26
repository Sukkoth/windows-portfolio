type Props = {
  title: string;
  imageUrl: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  iconSize?: "small" | "medium" | "large";
};

//md | sm
//small = 6 | 9
//medium = 9 | 12
//large = 14 | 14

function DesktopIconItem({
  title,
  imageUrl,
  onClick,
  onDoubleClick,
  iconSize: defaultIconSize = "small",
}: Props) {
  let iconSize;

  switch (defaultIconSize) {
    case "small":
      iconSize = "size-9 md:size-6";
      break;
    case "medium":
      iconSize = "size-12 md:size-9";
      break;
    case "large":
      iconSize = "size-14 md:size-14";
      break;
  }

  return (
    <div
      className='text-sm flex flex-col items-center justify-center hover:bg-stone-600/50 p-2 rounded-lg'
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <img className={iconSize} src={imageUrl} alt='desktopIcon' />
      <p className='sm-only:hidden'>{title}</p>
    </div>
  );
}

export default DesktopIconItem;
