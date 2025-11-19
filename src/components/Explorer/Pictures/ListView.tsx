import { useLocation, useNavigate, useParams } from "react-router-dom";
import Row from "../Projects/Row";
import { pictures } from "@/components/Apps/Photos/data";

function ListView() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const projectPictures = pictures.filter(
    (picture) => picture?.projectId === parseInt(projectId || "0")
  );

  return (
    <div className='flex-1 h-full border border-stone-600 border-t-0 border-l-0 overflow-x-auto'>
      <div className='min-w-[60rem]'>
        <Row enableHover={false} gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
          <Row.Title>Name</Row.Title>
          <Row.Title>Type</Row.Title>
          <Row.Title>Project Id</Row.Title>
          <Row.Title>Updated at</Row.Title>
        </Row>
        {projectPictures.map((picture, index) => (
          <div
            key={picture.id}
            onDoubleClick={() =>
              navigate("/app/photos", {
                state: {
                  showAllPictures: true,
                  projectId: parseInt(projectId || "0"),
                  pictureIndex: index,
                  backTo: location.pathname,
                },
                replace: false,
              })
            }
          >
            <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
              <Row.Item iconType='image'>{picture.fileName}</Row.Item>
              <Row.Item>
                <span className='uppercase'>{picture.fileType} file</span>{" "}
              </Row.Item>
              <Row.Item>{state?.projectId}</Row.Item>
              <Row.Item>Updated at</Row.Item>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListView;
