import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Tasks from "./pages/tasks/tasks.jsx";

import { createBrowserRouter } from "react-router";

export const routter = createBrowserRouter([
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
]);
