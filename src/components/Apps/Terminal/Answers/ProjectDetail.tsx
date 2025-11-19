import { projects } from "@/components/Explorer/Projects/data";
import { getFormattedDate } from "@/utils/date";

function ProjectDetail({ projectName }: { projectName: string }) {
  const project = projects.find(
    (project) =>
      project.projectName.replace(" ", "").toLowerCase() === projectName
  );

  if (!project) {
    return (
      <p className='text-red-500 font-medium'>
        Error: project {projectName} not found. Please type 'project -a' to see
        the list of available projects
      </p>
    );
  }

  return (
    <div className='p-4 space-y-4'>
      <p>Project Title:{project?.projectName}</p>
      <p>
        <span> Project Description:</span> {project?.description}
      </p>
      <p>
        <span>Status: </span>
        {project?.status ? (
          <span className='text-green-500'>Completed</span>
        ) : (
          <span className='text-red-500'>Not completed</span>
        )}
      </p>
      <p>
        <span> Type:</span> {project?.platform}
      </p>
      <p>
        <span> Created At: </span>
        {getFormattedDate(
          project?.createdAt ? new Date(project.createdAt!) : new Date()
        )}
      </p>
      {project?.updatedAt && (
        <p>
          {" "}
          <span> Updated At: </span>{" "}
          {getFormattedDate(new Date(project.updatedAt))}
        </p>
      )}
      <p>Technologies Used: </p>
      <ul className='list-disc list-inside ml-4 grid sm:grid-cols-2  w-fit gap-1 gap-x-10'>
        {project?.stack?.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
      <p> Features:</p>
      <ul className='list-disc list-inside ml-4'>
        {project?.features?.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {project?.deploymentLink && (
        <>
          <p> Demos:</p>
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
          <span>Code Repository: </span>
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
          <p> Future Plans:</p>
          <ul className='list-disc list-inside ml-4'>
            {project.futurePlan?.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>{" "}
        </>
      )}
    </div>
  );
}

export default ProjectDetail;
