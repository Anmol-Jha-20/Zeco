import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Manufacturing from "./pages/manufacturing.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import HeatExchangerCoils from "./components/Products/HeatExchangerCoils/HeatExchangerCoils.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/manufacturing",
        element: <Manufacturing />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/heat-exchanger-coils",
        element: <HeatExchangerCoils />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
