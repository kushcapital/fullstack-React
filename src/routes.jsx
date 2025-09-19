import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Tasks from "./pages/tasks/tasks.jsx";
import Error404 from "./pages/404/404.jsx";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./components/privateRoutes/privateRoutes.jsx";

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <Error404 />,
  },
]);
