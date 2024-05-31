import Modal from "../../Modal";
import TaskbarItem from "../../Taskbar/TaskbarItem";
import Content from "./Content";

function Github() {
  return (
    <Modal>
      <Modal.Button type='TOGGLER' id='github' close>
        <div>
          <TaskbarItem imgUrl='https://img.icons8.com/?size=120&id=AZOZNnY73haj&format=png&color=000000' />
        </div>
      </Modal.Button>
      <Modal.Content>
        <Content />
      </Modal.Content>
    </Modal>
  );
}

export default Github;
