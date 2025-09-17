import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

// Get the root DOM element.
const rootElement = document.getElementById("root");
// Create a root for the React application.
const root = createRoot(rootElement);

// Render the application within StrictMode.
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    {/* Provide the router configuration to the application */}
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen= {false}/>
    </QueryClientProvider>
  </StrictMode>
);
