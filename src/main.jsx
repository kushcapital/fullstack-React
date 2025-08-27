import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes.jsx";

// Get the root DOM element.
const rootElement = document.getElementById("root");
// Create a root for the React application.
const root = createRoot(rootElement);

// Render the application within StrictMode.
root.render(
  <StrictMode>
    {/* Provide the router configuration to the application */}
    <RouterProvider router={router} />
  </StrictMode>
);
