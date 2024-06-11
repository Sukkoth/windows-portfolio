import { useNavigate } from "react-router-dom";
import DesktopIconItem from "./DesktopIconItem";

export default function DesktopIcons() {
  const navigate = useNavigate();
  return (
    <div className='p-5 w-fit flex flex-col gap-5 flex-wrap max-h-[90dvh]'>
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=wl02Vd5WH3QG&format=png&color=000000'
        title='Documents'
        onDoubleClick={() => navigate("/explorer/documents")}
      />
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000'
        title='Projects'
        onDoubleClick={() => navigate("/explorer/projects")}
      />
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=yRoFUHiH0uft&format=png&color=000000'
        title='Pictures'
        onDoubleClick={() => navigate("/explorer/pictures")}
      />
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=n9d0Hm43JCPK&format=png&color=000000'
        title='Links'
        onDoubleClick={() => navigate("/explorer/links")}
      />
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=Dj3XwCB6cihe&format=png&color=000000'
        title='About'
        onDoubleClick={() => navigate("/explorer/about")}
      />
    </div>
  );
}
