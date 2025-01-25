import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/Error";
import Services from "./Pages/Service";
import Project from "./Pages/Project";
import Policy from "./Pages/Policy";
import TermsOfService from "./Pages/Termsofservice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "termofservice",
        element: <TermsOfService />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
