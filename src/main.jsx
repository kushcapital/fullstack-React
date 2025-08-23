import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import {routter} from "./routes.jsx"



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
