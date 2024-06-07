import React from "react";

type Props = {
  children: React.ReactNode;
  enableHover?: boolean;
  gridClass?: string;
};

function Row({
  children,
  enableHover = true,
  gridClass = "grid-cols-folder",
}: Props) {
  return (
    <div
      className={`grid ${gridClass} mb-1 ${
        enableHover ? "hover:bg-stone-700/40" : ""
      } rounded-lg`}
    >
      {children}
    </div>
  );
}

type ItemProps = {
  children: React.ReactNode;
  iconType?:
    | "folder"
    | "imageFolder"
    | "shortcut"
    | "link"
    | "image"
    | "github"
    | "textFile";
};

function Item({ children, iconType }: ItemProps) {
  const matchIcons = {
    link: "https://img.icons8.com/?size=100&id=n9d0Hm43JCPK&format=png&color=000000",
    folder:
      "https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000",
    imageFolder:
      "https://img.icons8.com/?size=100&id=K5ZTlMA55wO5&format=png&color=000000",
    image:
      "https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png&color=000000",
    github: "https://img.icons8.com/?size=100&id=16318&format=png&color=ffffff",
    program:
      "https://img.icons8.com/?size=100&id=l0UsZRTvcGel&format=png&color=000000",
    shortcut:
      "https://img.icons8.com/?size=100&id=i1z7pQ2orcJk&format=png&color=000000",
    textFile:
      "https://img.icons8.com/?size=100&id=Ygov9LJC2LzE&format=png&color=000000",
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
