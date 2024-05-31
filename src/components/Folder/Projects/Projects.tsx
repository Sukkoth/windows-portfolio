import { useTab } from "@/Provider/TabProvider";
import Modal from "../../Modal";
import TaskbarItem from "../../Taskbar/TaskbarItem";
import Content from "./Content";

function Projects() {
  const { activeTab } = useTab();
  console.log("🚀 ~ Projects ~ activeTab:", activeTab);
  return (
    <Modal>
      <Modal.Button type='TOGGLER' id='projects'>
        <div>
          <TaskbarItem
            imgUrl='https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000'
            id='projects'
          />
        </div>
      </Modal.Button>
      <Modal.Content>
        <Content />
      </Modal.Content>
    </Modal>
  );
}

export default Projects;
