type Props = {
  imageUrl: string;
  title: string;
};

function StartItem({ imageUrl, title }: Props) {
  return (
    <div className='flex hover:bg-stone-800/50 flex-col aspect-square items-center justify-center p-2 rounded-xl gap-1'>
      <img src={imageUrl} id='vscode' className='size-7 rounded-lg' />
      <p className='text-xs font-open-sans text-center'>{title}</p>
    </div>
  );
}

export default StartItem;
