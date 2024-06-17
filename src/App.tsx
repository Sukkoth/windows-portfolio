import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/Layouts/Layout";
import Home from "@/Pages/Home";

import "@/App.css";
import FolderView from "@/Layouts/FolderView";
import Github from "@/components/Apps/Github";
import Weather from "@/components/Apps/Weather";
import Todo from "@/components/Apps/Todo";
import Projects from "@/components/Explorer/Projects";
import ExplorerView from "@/components/Explorer/ExplorerView";
import Documents from "@/components/Explorer/Documents";
import Pictures from "@/components/Explorer/Pictures";
import Links from "@/components/Explorer/Links";
import About from "@/components/Explorer/About";
import Detail from "@/components/Explorer/Projects/Detail";
import Images from "@/components/Explorer/Projects/Detail/Images";
import Notepad from "@/components/Apps/Notepad";
import Photos from "@/components/Apps/Photos";
import ListView from "./components/Explorer/Pictures/ListView";
import Help from "@/components/Apps/Help";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='app' element={<FolderView type='app' />}>
          <Route path='github' element={<Github />} />
          <Route path='weather' element={<Weather />} />
          <Route path='todo' element={<Todo />} />
          <Route path='notepad' element={<Notepad />} />
          <Route path='photos' element={<Photos />} />
          <Route path='help' element={<Help />} />
        </Route>
        <Route path='explorer' element={<FolderView type='folder' />}>
          <Route index element={<Navigate to='projects' />} />
          <Route element={<ExplorerView />}>
            <Route path='projects'>
              <Route index element={<Projects />} />
              <Route path=':projectId' element={<Detail />} />
              <Route path=':projectId/images' element={<Images />} />
            </Route>
            <Route path='documents' element={<Documents />} />
            <Route path='pictures'>
              <Route index element={<Pictures />} />
              <Route path=':projectId' element={<ListView />} />
            </Route>
            <Route path='links' element={<Links />} />
            <Route path='about' element={<About />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
