import { useState } from "react";

type Props = {
  active?: boolean;
  double?: boolean;
  imageUrl: string;
  title: string;
  onClick?: () => void;
};
function QuickSettingItem({
  active: defaultActive = false,
  double = false,
  imageUrl,
  title,
  onClick,
}: Props) {
  const [active, setActive] = useState(defaultActive);
  return (
    <div>
      <div
        onClick={() => {
          setActive((prev) => !prev);
          onClick && onClick();
        }}
        className={`flex items-center justify-evenly h-10 rounded-md overflow-hidden border border-stone-600 ${
          !active
            ? "hover:bg-stone-600/10"
            : "bg-[#1a91e5] border-[#1a91e5] duration-500 transition-colors"
        }`}
      >
        <div
          className={`${double ? "w-[39px]" : "w-20"} ${
            active ? "hover:bg-[#5cb3f1]" : "hover:bg-stone-600/20"
          }
         flex items-center justify-center  h-full`}
        >
          <img
            style={{
              filter: active ? "invert(1)" : undefined,
            }}
            className='size-4'
            src={imageUrl}
            alt=''
          />
        </div>
        {double && (
          <>
            <div className='w-[1px] h-full bg-stone-100/20'></div>
            <div
              className={`w-[40px] flex items-center justify-center h-full ${
                active ? "hover:bg-[#5cb3f1]" : "hover:bg-stone-600/20"
              }`}
            >
              <img
                style={{
                  filter: active ? "invert(1)" : undefined,
                }}
                className='size-3 -rotate-90'
                src='https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff'
                alt=''
              />
            </div>{" "}
          </>
        )}
      </div>
      <p className='text-[11px] text-center pt-1 tracking-widest'>{title}</p>
    </div>
  );
}

export default QuickSettingItem;
