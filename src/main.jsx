import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import Shopping from "./pages/Shopping/index.jsx";
import Travel from "./pages/Travel/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        apth: "/shopping",
        element: <Shopping />,
      },
      {
        apth: "/travel",
        element: <Travel />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  </React.StrictMode>
);
