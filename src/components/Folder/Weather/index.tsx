import Modal from "@/components/Modal";
import TaskbarItem from "@/components/Taskbar/TaskbarItem";
import Content from "./Content";

function Weather() {
  return (
    <Modal>
      <Modal.Button type='TOGGLER' id='weather'>
        <div>
          <TaskbarItem
            id='github'
            imgUrl='https://img.icons8.com/?size=100&id=zIVmoh4T8wh7&format=png&color=000000'
          />
        </div>
      </Modal.Button>
      <Modal.Content>
        <Content />
      </Modal.Content>
    </Modal>
  );
}

export default Weather;
