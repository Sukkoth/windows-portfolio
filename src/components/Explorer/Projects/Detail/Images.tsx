import { useNavigate } from "react-router-dom";
import Row from "../Row";

function Images() {
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
            navigate("/app/photos", {
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
            <Row.Item iconType='image'>Images 1</Row.Item>
            <Row.Item>File Folder</Row.Item>
            <Row.Item>Created at</Row.Item>
            <Row.Item>Updated at</Row.Item>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Images;
