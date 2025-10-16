import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import BibleIntelligence from "../pages/BibleIntelligence";
import Devotional from "../pages/Devotional";
import Streams from "../pages/Streams";
import About from "../pages/About";
import Store from "../pages/Store";

const approuter = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <BibleIntelligence />,
        path: "/bibleintelligence",
      },
      {
        element: <Devotional />,
        path: "/devotionals",
      },
      {
        element: <Streams />,
        path: "/streams",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Store />,
        path: "/store",
      },
    ],
  },
]);

export default approuter;
