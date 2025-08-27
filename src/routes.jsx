import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Tasks from "./pages/tasks/tasks.jsx";
import Error404 from "./pages/404/404.jsx";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
