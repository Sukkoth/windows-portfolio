import { projects } from "@/components/Explorer/Projects/data";
import ProjectDetail from "./ProjectDetail";

function ListFolder({
  content,
  name,
}: {
  content: "all" | "one" | "manual";
  name?: string;
}) {
  return (
    <div className='w-full md:w-[70%] lg:w-[50%]'>
      {content === "all" ? (
        <ul className='space-y-1 ms-2'>
          {projects.map((project) => (
            <li className='lowercase' key={project.id}>
              {project.projectName.replace(" ", "")}
            </li>
          ))}
        </ul>
      ) : content === "manual" ? (
        <div className='font-light'>
          <h4 className='font-medium py-3 text-[#ECF4D6]'>
            project {"<command>"}{" "}
          </h4>
          <p className='py-2'>Usage:</p>
          <div>
            <div className='grid grid-cols-2 gap-1 mt-3'>
              <p className='ms-8'>project -a</p>
              <p className='ms-8'>Display all the projects</p>
            </div>
            <div className='grid grid-cols-2 gap-1'>
              <p className='ms-8'>project show {"<projectname>"} </p>
              <p className='ms-8'>Show the details of the given project</p>
            </div>
          </div>
        </div>
      ) : (
        <ProjectDetail projectName={name!} />
      )}
    </div>
  );
}

export default ListFolder;
