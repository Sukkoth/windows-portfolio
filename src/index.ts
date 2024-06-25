import { lazy } from "react";
import withSuspense from "./withSuspense";

export const Home = withSuspense(
  lazy(() => import("@/Pages/Home")),
  "app"
);

//APPS
const Github = withSuspense(
  lazy(() => import("@/components/Apps/Github")),
  "app"
);
const Weather = withSuspense(
  lazy(() => import("@/components/Apps/Weather")),
  "app"
);
const Todo = withSuspense(
  lazy(() => import("@/components/Apps/Todo")),
  "app"
);
const Photos = withSuspense(
  lazy(() => import("@/components/Apps/Photos")),
  "app"
);
const Notepad = withSuspense(
  lazy(() => import("@/components/Apps/Notepad")),
  "app"
);
const VSCode = withSuspense(
  lazy(() => import("@/components/Apps/StackBlitz")),
  "app"
);
const Help = withSuspense(
  lazy(() => import("@/components/Apps/Help")),
  "app"
);

//EXPLORER
const Projects = withSuspense(
  lazy(() => import("@/components/Explorer/Projects")),
  "explorer"
);
const Documents = withSuspense(
  lazy(() => import("@/components/Explorer/Documents")),
  "explorer"
);
const Pictures = withSuspense(
  lazy(() => import("@/components/Explorer/Pictures")),
  "explorer"
);
const Links = withSuspense(
  lazy(() => import("@/components/Explorer/Links")),
  "explorer"
);
const About = withSuspense(
  lazy(() => import("@/components/Explorer/About")),
  "explorer"
);

//EXPLORER NESTED
const ListView = withSuspense(
  lazy(() => import("@/components/Explorer/Pictures/ListView")),
  "explorer"
);
const Detail = withSuspense(
  lazy(() => import("@/components/Explorer/Projects/Detail")),
  "explorer"
);
const Images = withSuspense(
  lazy(() => import("@/components/Explorer/Projects/Detail/Images")),
  "explorer"
);

//these better be loaded at first, since the main layout is
//already lazily called

//LAYOUTS
// const FolderView = withSuspense(
//   lazy(() => import("@/Layouts/FolderView")),
//   "app"
// );
// const ExplorerView = withSuspense(
//   lazy(() => import("@/components/Explorer/ExplorerView")),
//   "app"
// );
const Layout = withSuspense(lazy(() => import("@/Layouts/Layout")));

export const LAYOUTS = {
  // FolderView,
  // ExplorerView,
  Layout,
};

export const EXPLORER = {
  Projects: {
    index: Projects,
    Detail,
    Images,
  },
  Documents,
  Pictures: {
    index: Pictures,
    ListView,
  },
  Links,
  About,
};

export const APPS = {
  Github,
  Weather,
  Todo,
  Photos,
  Notepad,
  Help,
  VSCode,
};
