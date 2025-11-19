import ViewNav from "@/Layouts/ViewNav";
import { useTab } from "@/Provider/TabProvider";
import { useState } from "react";
import Content from "./Content";

function Terminal() {
  const { toggleTerminal } = useTab();
  const [min, setMin] = useState<boolean>(
    JSON.parse(localStorage.getItem("terminalSize") || "false")
  );

  function handleTerminalSize() {
    setMin((prev) => !prev);
    localStorage.setItem("terminalSize", JSON.stringify(!min));
  }

  return (
    <div
      className={`absolute font-firacode ${
        min ? "inset-28" : "inset-0"
      } bg-[#242535eb] backdrop-blur-md shadow-2xl shadow-stone-900 rounded-2xl`}
    >
      <ViewNav
        type='app'
        onSetView={handleTerminalSize}
        onClose={() => toggleTerminal(false)}
      />
      <Content />
    </div>
  );
}

export default Terminal;
