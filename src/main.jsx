import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/Error";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import Policy from "./Pages/Policy";
import TermsOfService from "./Pages/Termsofservice";
import Gallery from "./Pages/Gallery";
import StateList from "./Pages/StateList";
import Calculator from "./Pages/Calculator";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/:id" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Service />} />
      <Route path="project" element={<Project />} />
      <Route path="policy" element={<Policy />} />
      <Route path="termofservice" element={<TermsOfService />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="country" element={<Country />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="statelist" element={<StateList />} />
      <Route path="calculator" element={<Calculator />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
