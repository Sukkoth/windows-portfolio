import { Navigate, Route, Routes } from "react-router-dom";
import * as ROUTES from "@/index";

import FolderView from "@/Layouts/FolderView";
import ExplorerView from "@/components/Explorer/ExplorerView";

import "@/App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ROUTES.LAYOUTS.Layout />}>
        <Route index element={<ROUTES.Home />} />
        <Route path='app' element={<FolderView type='app' />}>
          <Route path='github' element={<ROUTES.APPS.Github />} />
          <Route path='weather' element={<ROUTES.APPS.Weather />} />
          <Route path='todo' element={<ROUTES.APPS.Todo />} />
          <Route path='notepad' element={<ROUTES.APPS.Notepad />} />
          <Route path='photos' element={<ROUTES.APPS.Photos />} />
          <Route path='stackblitz' element={<ROUTES.APPS.VSCode />} />
          <Route path='help' element={<ROUTES.APPS.Help />} />
        </Route>
        <Route path='explorer' element={<FolderView type='folder' />}>
          <Route index element={<Navigate to='projects' />} />
          <Route element={<ExplorerView />}>
            <Route path='projects'>
              <Route index element={<ROUTES.EXPLORER.Projects.index />} />
              <Route
                path=':projectId'
                element={<ROUTES.EXPLORER.Projects.Detail />}
              />
              <Route
                path=':projectId/images'
                element={<ROUTES.EXPLORER.Projects.Images />}
              />
            </Route>
            <Route path='documents' element={<ROUTES.EXPLORER.Documents />} />
            <Route path='pictures'>
              <Route index element={<ROUTES.EXPLORER.Pictures.index />} />
              <Route
                path=':projectId'
                element={<ROUTES.EXPLORER.Pictures.ListView />}
              />
            </Route>
            <Route path='links' element={<ROUTES.EXPLORER.Links />} />
            <Route path='about' element={<ROUTES.EXPLORER.About />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
