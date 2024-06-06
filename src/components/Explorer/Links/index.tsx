import Row from "../Projects/Row";
import { links } from "./links";

function Links() {
  return (
    <div className='flex-grow border border-stone-600 border-l-0'>
      <Row enableHover={false}>
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
          <Row>
            <Row.Item iconType='link'>{link.title}</Row.Item>
            <Row.Item>{true}</Row.Item>
            <Row.Item>Internet Shortcut</Row.Item>
            <Row.Item>{link.createdAt}</Row.Item>
            <Row.Item>{link.updatedAt}</Row.Item>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Links;
