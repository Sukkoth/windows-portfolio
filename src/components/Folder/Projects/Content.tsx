import FolderView from "../View/FolderView";
import ProjectItem from "./ProjectItem";

function Content() {
  return (
    <FolderView id='projects'>
      <div className='w-full h-full p-5 overflow-y-auto pb-20'>
        <div className='w-3/4 mx-auto mt-32 grid grid-cols-4 gap-5'>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </FolderView>
  );
}

export default Content;
