import Modal from "@/components/Modal";
import TaskbarItem from "@/components/Taskbar/TaskbarItem";
import Content from "./Content";

function Todo() {
  return (
    <Modal>
      <Modal.Button type='TOGGLER' id='todo'>
        <div>
          <TaskbarItem
            id='linkedin'
            imgUrl='https://img.icons8.com/?size=100&id=HpPqCqynotVp&format=png&color=000000'
          />
        </div>
      </Modal.Button>
      <Modal.Content>
        <Content />
      </Modal.Content>
    </Modal>
  );
}

export default Todo;
