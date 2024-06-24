import { useNavigate } from "react-router-dom";
import DesktopIconItem from "./DesktopIconItem";

export default function DesktopIcons() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-wrap sm-only:absolute sm-only:bottom-20 sm-only:justify-evenly sm-only:items-start p-2 sm-only:w-[70%] sm-only:right-[15%] sm:flex-col sm:gap-5 sm:w-fit  max-h-[90dvh]'>
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
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=VQOfeAx5KWTK&format=png&color=000000'
        title='Help'
        onDoubleClick={() => navigate("/app/help")}
      />
      <DesktopIconItem
        imageUrl='https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000'
        title='VSCode'
        onDoubleClick={() => navigate("/app/vscode")}
      />
    </div>
  );
}
