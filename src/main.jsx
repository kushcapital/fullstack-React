import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";

// Create a browser router instance with defined routes.
const routter = createBrowserRouter([
  {
    // Route for the homepage.
    path: "/",
    element: (
      <div>
        <h1>Hello world </h1>
        {/* Link to the login page */}
        <Link to="login">Login</Link>
      </div>
    ),
  },
  {
    // Route for the login page.
    path: "login",
    element: (
      <div>
        <p>This is login page</p>
      </div>
    ),
  },
]);

// Get the root DOM element.
const rootElement = document.getElementById("root");
// Create a root for the React application.
const root = createRoot(rootElement);

// Render the application within StrictMode.
root.render(
  <StrictMode>
    {/* Provide the router configuration to the application */}
    <RouterProvider router={routter} />
  </StrictMode>
);
