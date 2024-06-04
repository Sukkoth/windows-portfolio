type Props = {
  top?: string;
  middle?: string;
  bottom?: string;
  icon?: string;
};

function DayCard(props: Props) {
  return (
    <div className='border-2 border-white/10 rounded-3xl text-center py-5 hover:scale-110 duration-300 hover:bg-white/10 w-32 h-44'>
      {props.icon && <img src={props.icon} className='mx-auto' alt='' />}
      <p className='text-xl'>{props.top || "Today"}</p>
      <h1 className='my-3 font-medium relative after:content-["o"] after:-top-2 after:absolute after:size-9 after:text-white px-4 after:text-xl after:right-5'>
        <span className='text-lg'>{props.middle || "20"}</span>
      </h1>
      {!props.icon && (
        <p className='text-stone-400 text-wrap px-4'>
          {props.bottom || "Mist"}
        </p>
      )}
    </div>
  );
}

export default DayCard;
