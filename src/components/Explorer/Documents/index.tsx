import Row from "@/components/Explorer/Projects/Row";
import { getFormattedDate } from "@/utils/date";
import { useNavigate } from "react-router-dom";
import { documents } from "./data";

function Documents() {
  const navigate = useNavigate();

  function getWhereToDirect(fileType: string, path: string) {
    console.log({ fileType, path });
    switch (fileType) {
      case "Image":
        return navigate("/app/photos", {
          state: {
            showSingle: true,
            path: path,
            backTo: location.pathname,
          },
        });
      case "PDF":
        return window.open("/assets/Documents/CV.pdf");
    }
  }

  return (
    <div className='h-full border border-stone-600 border-t-0 border-l-0  overflow-x-auto'>
      <div className='min-w-[60rem]'>
        <Row enableHover={false} gridClass='grid-cols-[2fr_1fr_repeat(1,_1fr)]'>
          <Row.Title>Name</Row.Title>
          <Row.Title>Type</Row.Title>
          <Row.Title>Created at</Row.Title>
        </Row>

        {documents.map((document) => (
          <div
            onDoubleClick={() =>
              getWhereToDirect(
                document.type,
                document.imagePath || document.filePath || ""
              )
            }
            key={document.id}
          >
            <Row
              key={document.id}
              gridClass='grid-cols-[2fr_1fr_repeat(1,_1fr)]'
            >
              <Row.Item
                iconType={document.type === "Image" ? "image" : "pdfFile"}
              >
                {document.name}
              </Row.Item>
              <Row.Item>
                <span className='uppercase'>{document.type} file</span>{" "}
              </Row.Item>
              <Row.Item>
                {getFormattedDate(new Date(document.createdAt))}
              </Row.Item>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;
