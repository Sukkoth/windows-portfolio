import Row from "@/components/Explorer/Projects/Row";
import { projects } from "@/components/Explorer/Projects/data";

function Projects() {
  function getStatusImg(status: boolean) {
    return status ? activeImg : inactiveImg;
  }

  return (
    <div className='flex-1 border border-stone-600 border-t-0 border-l-0'>
      <Row enableHover={false}>
        <Row.Title>Name</Row.Title>
        <Row.Title>Status</Row.Title>
        <Row.Title>Platform</Row.Title>
        <Row.Title>Created at</Row.Title>
        <Row.Title>Updated at</Row.Title>
      </Row>

      {projects.map((project) => (
        <Row key={project.id}>
          <Row.Item iconType='folder'>{project.projectName}</Row.Item>
          <Row.Item>
            <span>{getStatusImg(project.status)}</span>
          </Row.Item>
          <Row.Item>{project.platform}</Row.Item>
          <Row.Item>{new Date(project.createdAt).toLocaleString()}</Row.Item>
          <Row.Item>{new Date(project.updatedAt).toLocaleString()}</Row.Item>
        </Row>
      ))}
    </div>
  );
}

const activeImg = (
  <img
    src='https://img.icons8.com/?size=100&id=70yRC8npwT3d&format=png&color=000000'
    className='size-5'
  />
);
const inactiveImg = (
  <img
    src='https://img.icons8.com/?size=100&id=VACKPnlQAC59&format=png&color=000000'
    className='size-5'
  />
);

export default Projects;
