import { useNavigate, useParams } from "react-router-dom";
import Row from "../Row";
import { projects } from "../data";

function Detail() {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.id === parseInt(projectId || "")
  );
  const navigate = useNavigate();
  return (
    <div className='flex-1 h-full border border-stone-600 border-t-0 border-l-0 overflow-x-auto'>
      <div className='min-w-[60rem]'>
        <Row enableHover={false} gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
          <Row.Title>Name</Row.Title>
          <Row.Title>Type</Row.Title>
          <Row.Title>Created at</Row.Title>
          <Row.Title>Updated at</Row.Title>
        </Row>
        <div
          onDoubleClick={() =>
            navigate(`images`, {
              state: {
                projectId,
              },
            })
          }
        >
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='imageFolder'>Images</Row.Item>
            <Row.Item>File Folder</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
          </Row>
        </div>

        <div
          onDoubleClick={() =>
            navigate("/app/notepad", {
              state: {
                projectId,
                backTo: location.pathname,
                replace: true,
              },
            })
          }
        >
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='textFile'>ReadMe</Row.Item>
            <Row.Item>Text file</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
          </Row>
        </div>
        <div
          onDoubleClick={() => window.open(project?.deploymentLink, "_blank")}
        >
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='link'>Live Demo</Row.Item>
            <Row.Item>Internet Shortcut</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
          </Row>
        </div>
        <div onDoubleClick={() => window.open(project?.repository, "_blank")}>
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='github'>Github Repo</Row.Item>
            <Row.Item>Internet Shortcut</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
            <Row.Item>06/17/2024</Row.Item>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Detail;
