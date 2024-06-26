import { useNavigate } from "react-router-dom";
import Row from "../Row";

function Detail() {
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
        <div onDoubleClick={() => navigate(`images`)}>
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='imageFolder'>Images</Row.Item>
            <Row.Item>File Folder</Row.Item>
            <Row.Item>Created at</Row.Item>
            <Row.Item>Updated at</Row.Item>
          </Row>
        </div>

        <div
          onDoubleClick={() =>
            navigate("/app/notepad", {
              state: {
                noteId: 2,
                backTo: location.pathname,
                replace: true,
              },
              replace: true,
            })
          }
        >
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='textFile'>ReadMe</Row.Item>
            <Row.Item>Text file</Row.Item>
            <Row.Item>Created at</Row.Item>
            <Row.Item>Updated at</Row.Item>
          </Row>
        </div>
        <div onDoubleClick={() => alert("redirect to github")}>
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='github'>Github Repo</Row.Item>
            <Row.Item>Internet Shortcut</Row.Item>
            <Row.Item>Created at</Row.Item>
            <Row.Item>Updated at</Row.Item>
          </Row>
        </div>
        <div>
          <Row gridClass='grid-cols-[3fr_1fr_repeat(2,_1fr)]'>
            <Row.Item iconType='shortcut'>Show More Details . . .</Row.Item>
            <Row.Item>Program Shortcut</Row.Item>
            <Row.Item>Created at</Row.Item>
            <Row.Item>Updated at</Row.Item>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Detail;
