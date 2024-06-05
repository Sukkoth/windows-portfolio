import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/Pages/Home";

import "@/App.css";
import FolderView from "./components/Folder/View/FolderView";
import Github from "@/components/Folder/Github";
import Weather from "@/components/Folder/Weather";
import Todo from "@/components/Folder/Todo";
import Projects from "./components/Folder/Projects";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='app' element={<FolderView />}>
          <Route path='github' element={<Github />} />
          <Route path='weather' element={<Weather />} />
          <Route path='todo' element={<Todo />} />
          <Route path='explorer' element={<Projects />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
