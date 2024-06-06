import React from "react";

type Props = {
  children: React.ReactNode;
  enableHover?: boolean;
};

function Row({ children, enableHover = true }: Props) {
  return (
    <div
      className={`grid grid-cols-folder mb-1 ${
        enableHover ? "hover:bg-stone-700/40" : ""
      } rounded-lg`}
    >
      {children}
    </div>
  );
}

type ItemProps = {
  children: React.ReactNode;
  iconType?: "folder" | "link";
};

function Item({ children, iconType }: ItemProps) {
  const matchIcons = {
    link: "https://img.icons8.com/?size=100&id=n9d0Hm43JCPK&format=png&color=000000",
    folder:
      "https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000",
  };

  if (iconType) {
    return (
      <div className='flex gap-3 px-2 py-2'>
        <img className='size-5' src={matchIcons[iconType]} alt='ic' />
        <p>{children}</p>
      </div>
    );
  }
  return <p className='px-2 py-2'>{children}</p>;
}

type TitleProps = {
  children: React.ReactNode;
};
function Title({ children }: TitleProps) {
  return <p className='border border-stone-600 ps-2 py-1'>{children}</p>;
}

Row.Item = Item;
Row.Title = Title;

export default Row;
