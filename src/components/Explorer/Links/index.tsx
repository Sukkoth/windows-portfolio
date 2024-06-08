import { getFormattedDate } from "@/utils/date";
import Row from "../Projects/Row";
import { links } from "./links";

function Links() {
  return (
    <div className='flex-grow border border-stone-600 border-l-0 h-full overflow-x-auto'>
      <div className='min-w-[60rem]'>
        <Row enableHover={false} gridClass='grid-cols-[2fr_1fr_repeat(3,_1fr)]'>
          <Row.Title>Name</Row.Title>
          <Row.Title>Status</Row.Title>
          <Row.Title>Type</Row.Title>
          <Row.Title>Created at</Row.Title>
          <Row.Title>Updated at</Row.Title>
        </Row>
        {links.map((link) => (
          <div
            onDoubleClick={() => window.open(link.url, "_blank")}
            key={link.id}
          >
            <Row gridClass='grid-cols-[2fr_1fr_repeat(3,_1fr)]'>
              <Row.Item iconType='link'>{link.title}</Row.Item>
              <Row.Item>{"active"}</Row.Item>
              <Row.Item>Internet Shortcut</Row.Item>
              <Row.Item>{getFormattedDate(new Date(link.createdAt))}</Row.Item>
              <Row.Item>{getFormattedDate(new Date(link.updatedAt))}</Row.Item>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
