import { projects } from "@/components/Explorer/Projects/data";
import { getFormattedDate } from "@/utils/date";
import { useLocation } from "react-router-dom";

function Notepad() {
  const location = useLocation();

  const projectId = location.state?.projectId;

  const project = projects.find(
    (project) => parseInt(projectId) === project.id
  );

  console.log({ projectId, project });
  return (
    <div className='p-2 pb-20 overflow-y-auto h-full bg-stone-800'>
      <div className='outline-none'>
        <div className='p-4 bg-stone-800/95 h-full text-white space-y-4'>
          <p className='text-lg font-semibold'>
            Project Title:{project?.projectName}
          </p>
          <p>
            {" "}
            <span className='font-bold text-lg'>
              {" "}
              Project Description:
            </span>{" "}
            {project?.description}
          </p>
          <p>
            <span className='font-bold text-lg'>Status: </span>
            {project?.status ? (
              <span className='text-green-500'>Completed</span>
            ) : (
              <span className='text-red-500'>Not completed</span>
            )}
          </p>
          <p>
            <span className='font-bold text-lg'> Type:</span>{" "}
            {project?.platform}
          </p>
          <p>
            <span className='font-bold text-lg'> Created At: </span>
            {getFormattedDate(
              project?.createdAt ? new Date(project.createdAt!) : new Date()
            )}
          </p>
          {project?.updatedAt && (
            <p>
              {" "}
              <span className='font-bold text-lg'> Updated At: </span>{" "}
              {getFormattedDate(new Date(project.updatedAt))}
            </p>
          )}
          <p className='font-bold text-lg'>Technologies Used: </p>
          <ul className='list-disc list-inside ml-4 grid sm:grid-cols-2  w-fit gap-1 gap-x-10'>
            {project?.stack?.map((stack) => (
              <li>{stack}</li>
            ))}
          </ul>
          <p className='font-bold text-lg'> Features:</p>
          <ul className='list-disc list-inside ml-4'>
            {project?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {project?.deploymentLink && (
            <>
              <p className='font-bold text-lg'> Demos:</p>
              <ul className='list-disc list-inside ml-4'>
                <li>
                  <a
                    target='_blank'
                    href={project.deploymentLink}
                    className='text-blue-500 hover:underline'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>{" "}
            </>
          )}
          {project?.repository && (
            <p>
              <span className='font-bold text-lg'>Code Repository: </span>
              <a
                target='_blank'
                href={project.repository}
                className='text-blue-500 hover:underline'
              >
                GitHub Repository
              </a>
            </p>
          )}
          {project?.futurePlan && (
            <>
              {" "}
              <p className='font-bold text-lg'> Future Plans:</p>
              <ul className='list-disc list-inside ml-4'>
                {project.futurePlan?.map((plan, index) => (
                  <li key={index}>{plan}</li>
                ))}
              </ul>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notepad;
