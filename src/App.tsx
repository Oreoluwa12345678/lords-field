import { RouterProvider } from "react-router-dom";
import "./App.css";
import approuter from "./routers/routers";

function App() {
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
